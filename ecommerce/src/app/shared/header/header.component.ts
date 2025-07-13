import { afterNextRender, Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../pages/home/service/home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  categories_menus:any = [];
  currency:string = 'COP';
  
  constructor(
        public homeService: HomeService,
        private toastr: ToastrService,
        private cookieService: CookieService,
        
      ) {
          afterNextRender(() => {
            this.homeService.menus().subscribe((resp:any) => {
              console.log(resp);
              this.categories_menus = resp.categories_menus;
              
            })
            this.currency = this.cookieService.get("currency") ? this.cookieService.get("currency") : 'COP';
        })      
      } 
      
      getIconMenu(menu:any){
        var miDiv:any = document.getElementById('icon-'+menu.id);
        miDiv.innerHTML = menu.icon; 
        return '';
      }

      changeCurrency(val:string){
        // if(this.user){
        //   this.cartService.deleteCartsAll().subscribe((resp:any) => {
             this.cookieService.set("currency",val);
        //     window.location.reload();
        //     console.log(resp);
        //   })
        // }else{
        //   this.cookieService.set("currency",val);
          setTimeout(() => {
            window.location.reload();
          }, 25);
        // }
      }
    
      // searchProduct(){
      //   window.location.href = "/productos-busqueda?search="+this.searchT;
      // }
}
