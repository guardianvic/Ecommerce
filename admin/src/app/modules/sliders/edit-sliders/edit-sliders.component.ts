import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SlidersService } from '../service/sliders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-sliders',
  templateUrl: './edit-sliders.component.html',
  styleUrls: ['./edit-sliders.component.scss']
})
export class EditSlidersComponent {

    title:string = '';
     subtitle:string = '';
     label:string = '';
     link:string = '';
     color:string = '';
     state:number = 1;  
      imagen_previsualiza:any = "https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/illustrations/easy/2-dark.svg";
      file_imagen:any = null;
    
      isLoading$:any;
      slider_id:string = '';
    
      
    
      constructor(
        public sliderService: SlidersService,
        public toastr: ToastrService,
        public activedRoute: ActivatedRoute,
      ){
    
      }
    
      ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.  
      this.isLoading$ = this.sliderService.isLoading$;
      this.activedRoute.params.subscribe((resp:any) => {
        this.slider_id = resp.id;
      })

      this.sliderService.showSlider(this.slider_id).subscribe((resp:any) => {
        console.log(resp);

        this.title = resp.slider.title;
        this.subtitle = resp.slider.subtitle;
        this.label = resp.slider.label;
        this.link = resp.slider.link;
        this.color = resp.slider.color;
        this.state = resp.slider.state;
        this.imagen_previsualiza = resp.slider.imagen; 
      })
     
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
        this.sliderService.isLoadingSubject.next(true);
        setTimeout(() =>{
          this.sliderService.isLoadingSubject.next(false)
        }, 50);
      }
  
      save(){
        
        if (!this.title || !this.subtitle) {
          this.toastr.error("Validacion","Los campos con el * son obligatorios");
          return;      
        }
    
        let formData = new FormData();
        formData.append("title",this.title);
        if (this.label) {
          formData.append("label",this.label);      
        }
          formData.append("subtitle",this.subtitle+"");
          if (this.file_imagen) {
            formData.append("image",this.file_imagen);
          }
          if (this.link) {
            formData.append("link",this.link); 
          }
          if (this.color) {
            formData.append("color",this.color); 
          }
         
        this.sliderService.updateSliders(this.slider_id,formData).subscribe((resp:any) => {
          console.log(resp);

          this.toastr.success("Exito","El slider se edito con exito :) ");
          
        });
      }
  

}
