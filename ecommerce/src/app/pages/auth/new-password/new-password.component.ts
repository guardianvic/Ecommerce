import { Component, Input, } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css'
})
export class NewPasswordComponent {

    new_password:string = '';
    isLoadingCode: any = null; 
    @Input() code: any;
    
    constructor(
        public authService: AuthService,
        private toastr: ToastrService,
        private router: Router,
      ) {
        
      }
    
      verifiedNewPassword(){
        if(!this.new_password){
          this.toastr.error("Validacion","Nesecitas ingresar el codigo de verificacion");
        }
    
        let data = {
          new_password: this.new_password,
          code: this.code,
        }
        this.authService.verifiedNewPassword(data).subscribe((resp:any) => {
          console.log(resp);                 
            this.toastr.success("Exito","La contraseña se actualizo con exito");
            this.router.navigateByUrl("/login");       
        });
      }

}
