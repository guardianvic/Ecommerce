import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

      title:string = '';
      sku:string = '';
      resumen:string = '';
      price_cop:number = 0;
      price_usd:number = 0;
      description:any ="<p>Hello, world!</p>";
      imagen_previsualiza:any = "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/illustrations/easy/2-dark.svg";
      file_imagen:any = null;
    
      isLoading$:any;

      categorie_first_id:string = '';
      categorie_second_id:string = '';
      categorie_third_id:string = '';

      categories_first:any = [];
      categories_seconds:any = [];
      categories_seconds_backups:any = [];
      categories_thirds:any = [];
      categories_thirds_backups:any = [];
      
    
      constructor(
        public productService: ProductService,
        public toastr: ToastrService,
      ){
    
      }
    
      ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.  
      this.isLoading$ = this.productService.isLoading$;
     
      }
     
    
      processFile($event:any){
        if ($event.target.files[0].type.indexOf("image") < 0) {
          this.toastr.error("Validacion","El archivo no es una imagen");
          return;
        }
        this.file_imagen = $event.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(this.file_imagen);
        reader.onloadend = () => this.imagen_previsualiza = reader.result;
        this.isLoadingView();
      }
    
      isLoadingView(){
        this.productService.isLoadingSubject.next(true);
        setTimeout(() =>{
          this.productService.isLoadingSubject.next(false)
        }, 50);
      }

      changeDepartamento(){
        this.categories_seconds_backups = this.categories_seconds.filter((item:any) => 
          item.categorie_second_id == this.categorie_third_id)
      }
      
      changeCategorie(){
        
      }
  
      save(){
        
        if (!this.title || !this.file_imagen) {
          this.toastr.error("Validacion","Los campos con el * son obligatorios");
          return;      
        }
    
        let formData = new FormData();
        formData.append("title",this.title);
        formData.append("image",this.file_imagen);
       
         
        this.productService.createProducts(formData).subscribe((resp:any) => {
          console.log(resp);
    
          this.title = '';
          this.file_imagen = null;
          this.imagen_previsualiza = "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/illustrations/easy/2-dark.svg";
          this.toastr.success("Exito","El producto se registro con exito");
          
        });
      }
  

}
