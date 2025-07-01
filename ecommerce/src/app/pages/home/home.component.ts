import { afterNextRender, Component } from '@angular/core';
import { HomeService } from './service/home.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


declare function SLIDER_PRINCIPAL([]):any;
declare var $:any;
declare function DATA_VALUES([]):any;
declare function PRODUCTS_CAROUSEL_HOME([]):any;
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

    TRADING_PRODUCT_NEW:any = [];
    TRADING_PRODUCT_FEATURE:any = [];
    TRADING_PRODUCT_TOP_SELLER:any = [];
    PRODUCTS_ELECTRONICS:any = [];
    PRODUCTS_CAROUSEL:any = [];

    BANNERS_SECUNDARIOS:any = [];
    BANNERS_PRODUCTS:any = [];

    LASTS_PRODUCT_DISCOUNT:any = [];
    LASTS_PRODUCT_FEATURE:any = [];
    LASTS_PRODUCT_SELLING:any = [];

  
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
            this.TRADING_PRODUCT_NEW = resp.product_tranding_new.data;
            this.TRADING_PRODUCT_FEATURE = resp.product_tranding_featured.data;
            this.TRADING_PRODUCT_TOP_SELLER = resp.product_tranding_top_sellers.data;
            this.BANNERS_SECUNDARIOS = resp.sliders_secundario;
            this.PRODUCTS_ELECTRONICS = resp.product_electronics.data;
            this.PRODUCTS_CAROUSEL = resp.products_carusel.data;
            this.BANNERS_PRODUCTS = resp.sliders_products;

            this.LASTS_PRODUCT_DISCOUNT = resp.product_last_discounts.data;
            this.LASTS_PRODUCT_FEATURE = resp.product_last_featured.data;
            this.LASTS_PRODUCT_SELLING = resp.product_last_selling.data;

            setTimeout(() => {
              SLIDER_PRINCIPAL($); 
              DATA_VALUES($);
              PRODUCTS_CAROUSEL_HOME($); 
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

      getTitleBannerSecundario(BANNER:any,ID_BANNER:string){
        var miDiv:any = document.getElementById(ID_BANNER);
        miDiv.innerHTML = BANNER.title; 
        return '';
      }

      

  }

  