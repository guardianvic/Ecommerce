import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AttributesService } from '../service/attributes.service';

@Component({
  selector: 'app-sub-attribute-create',
  templateUrl: './sub-attribute-create.component.html',
  styleUrls: ['./sub-attribute-create.component.scss']
})
export class SubAttributeCreateComponent {

  //  @Output() Properties: EventEmitter<any> = new EventEmitter();
  
    @Input() properties:any = [];
    isLoading$:any;
    
    
    color:any;
    type_action:number = 1;
    name:string = '';
    
    constructor(
  
      public attributesService: AttributesService,
      public modal: NgbActiveModal,
      private toastr: ToastrService,
      public modalService: NgbModal,
    ){
  
    }
  
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.isLoading$ = this.attributesService.isLoading$;
    }
  
    store(){
      if (!this.name ) {
        this.toastr.error("Validacion","Todos los campos son necesarios");
        return;
      }
      let data = {
        name: this.name,
        code: this.color,
        state: 1,
      };
      this.attributesService.createAttributes(data).subscribe((resp:any) => {
        console.log(resp);
        if (resp.message == 403) {
          this.toastr.error("Validacion","El nombre de atributo ya exite");
          return;
        }else{
          // this.AttributeC.emit(resp.attribute);
          this.toastr.success("Exitos","El atributo fue registrado con exito");
          this.modal.close();
        }
      })
    }

    delete(Propertie:any){

    }

}
