import { afterNextRender, Component } from '@angular/core';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../pages/home/service/home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  categories_menus:any = [];
  
  constructor(
        public homeService: HomeService,
        private toastr: ToastrService,
        private router: Router,
      ) {
          afterNextRender(() => {
            this.homeService.home().subscribe((resp:any) => {
              console.log(resp);
              this.categories_menus = resp.categories_menus;
              
            })
        })      
      } 
      
      getIcomMenu(menu:any){
        var miDiv:any = document.getElementById('icom-'+menu.id);
        miDiv.innerHTML = menu.icom; 
        return '';
      }
}
