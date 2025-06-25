import { afterNextRender, Component } from '@angular/core';
import { HomeService } from './service/home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


declare function SLIDER_PRINCIPAL([]):any;
declare var $:any;
// declare function DATA_VALUES([]):any;
// declare function PRODUCTS_CAROUSEL_HOME([]):any;
// declare function MODAL_PRODUCT_DETAIL([]):any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    SLIDERS:any = [];
    CATEGORIES_RANDOMS:any = [];
  
    constructor(
      public homeService: HomeService,
      private toastr: ToastrService,
      private router: Router,
    ) {
        afterNextRender(() => {
          this.homeService.home().subscribe((resp:any) => {
            console.log(resp);
            this.SLIDERS = resp.sliders_principal;
            this.CATEGORIES_RANDOMS = resp.categories_randoms;
            setTimeout(() => {
              SLIDER_PRINCIPAL($); 
            }, 50);
          })
        })      
      }      
            
      
     
      

      ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
      }

      getLabelSlider(SLIDER:any){
        var miDiv:any = document.getElementById('label-'+SLIDER.id);
        miDiv.innerHTML = SLIDER.label; 
        return '';
      }

      getSubtitleSlider(SLIDER:any){
        var miDiv:any = document.getElementById('subtitle-'+SLIDER.id);
        miDiv.innerHTML = SLIDER.subtitle; 
        return '';
      }

  }

  