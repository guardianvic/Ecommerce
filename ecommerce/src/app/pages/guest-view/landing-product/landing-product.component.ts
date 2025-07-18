import { afterRender, Component } from '@angular/core';
import { HomeService } from '../../home/service/home.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalProductComponent } from '../component/modal-product/modal-product.component';
import { CookieService } from 'ngx-cookie-service';


 declare function MODAL_PRODUCT_DETAIL([]):any;
 declare function LANDING_PRODUCT([]):any;
 declare function MODAL_QUANTITY_LANDING([]):any;
 declare var $:any;

@Component({
  selector: 'app-landing-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,ModalProductComponent],
  templateUrl: './landing-product.component.html',
  styleUrl: './landing-product.component.css'
})
export class LandingProductComponent {

  PRODUCT_SLUG:any;
  PRODUCT_SELECTED:any;
  variation_selected:any;
  sub_variation_selected:any;
  PRODUCT_RELATEDS:any = [];
  product_selected_modal:any;
  CAMPAING_CODE:any;
  DISCOUNT_CAMPAING:any;

  currency:string = 'COP';
  plus:number = 0;

  // reviews:any = []

  constructor(
    public homeService: HomeService,
    public activedRoute: ActivatedRoute,
     private toastr: ToastrService,
     private router:Router,
     private cookieService: CookieService,
  ){  
      this.activedRoute.params.subscribe((resp:any) => {
      this.PRODUCT_SLUG = resp.slug;
      })
      this.activedRoute.queryParams.subscribe((resp:any) => {
        this.CAMPAING_CODE = resp.campaing_discount;
      })

      this.homeService.showProduct(this.PRODUCT_SLUG,this.CAMPAING_CODE).subscribe((resp:any) => {
       console.log(resp);
       if (resp.message == 403) {
        this.toastr.error("Validacion",resp.message_text);
        this.router.navigateByUrl("/");
       }else{
         this.PRODUCT_SELECTED = resp.product;
         this.PRODUCT_RELATEDS = resp.product_relateds.data;
          this.DISCOUNT_CAMPAING = resp.discount_campaing;
            // this.reviews = resp.reviews;
            if(this.DISCOUNT_CAMPAING){
              this.PRODUCT_SELECTED.discount_g = this.DISCOUNT_CAMPAING;
            } 
       }
      })

      afterRender(() => {
        setTimeout(() => {
          MODAL_PRODUCT_DETAIL($);
           LANDING_PRODUCT($);
        }, 50);
         this.currency = this.cookieService.get("currency") ? this.cookieService.get("currency") : 'COP';
      })
  }

  // ngOnInit(): void {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
  //   setTimeout(() => {
  //     MODAL_QUANTITY_LANDING($);
  //   }, 50);
  // }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }

  getNewTotal(PRODUCT: any, DISCOUNT_FLASH_P: any) {
    let price = this.currency === 'COP' ? PRODUCT.price_cop : PRODUCT.price_usd;
    let total: number;
  
    if (DISCOUNT_FLASH_P.type_discount === 1) {
      total = price - price * (DISCOUNT_FLASH_P.discount * 0.01);
    } else {
      total = price - DISCOUNT_FLASH_P.discount;
    }
  
    const formato = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return formato.format(total);
  }
  
  getTotalPriceProduct(PRODUCT: any) {
    if (PRODUCT.discount_g) {
      return this.getNewTotal(PRODUCT, PRODUCT.discount_g); 
    }
  
    const total = this.currency === 'COP' ? PRODUCT.price_cop : PRODUCT.price_usd;
  
    const formatoMoneda = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return formatoMoneda.format(total);
  }

  getTotalCurrency(PRODUCT: any) {
    const valor = this.currency === 'COP' ? PRODUCT.price_cop : PRODUCT.price_usd;
  
    const formatoMoneda = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return formatoMoneda.format(valor);
  }

  selectedVariation(variation:any){
    this.variation_selected = null;
    this.sub_variation_selected = null;
    this.plus = 0;
    setTimeout(() => {
      this.plus += variation.add_price;
      this.variation_selected = variation;
      // MODAL_PRODUCT_DETAIL($);
    }, 50);
  }

  selectedSubVariation(subvariation:any){
    this.sub_variation_selected = null;
    this.plus =  this.variation_selected.add_price;
    setTimeout(() => {
      this.plus += subvariation.add_price;
      this.sub_variation_selected = subvariation;
    }, 50);
  }

   openDetailModal(PRODUCT:any){
     this.product_selected_modal = null;
     setTimeout(() => {
       this.product_selected_modal = PRODUCT;
     }, 50);
   }
} 
