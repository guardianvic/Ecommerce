import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import { ToastrService } from 'ngx-toastr';


 declare function MODAL_PRODUCT_DETAIL([]):any;
// declare function MODAL_QUANTITY([]):any;
 declare var $:any;
@Component({
  selector: 'app-modal-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modal-product.component.html',
  styleUrl: './modal-product.component.css'
})
export class ModalProductComponent {

  @Input() product_selected:any;
   variation_selected:any;
   sub_variation_selected:any;

   currency:string = 'COP';
  // plus:number = 0;

  // constructor(
  //   private toastr: ToastrService,
  //   private router: Router,
    
  // ) {

  //   // afterRender(() => {
  //   //   this.currency = this.cookieService.get("currency") ? this.cookieService.get("currency") : 'PEN';
  //   // })
  // }

   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     console.log(this.product_selected);
     // this.currency = this.cookieService.get("currency") ? this.cookieService.get("currency") : 'COP';
     setTimeout(() => {
       MODAL_PRODUCT_DETAIL($);
      
     }, 50);
   }

  getNewTotal(PRODUCT: any, DISCOUNT_FLASH_P: any): string {
    let total: number;
  
    if (DISCOUNT_FLASH_P.type_discount == 1) {
      total = PRODUCT.price_cop - PRODUCT.price_cop * (DISCOUNT_FLASH_P.discount * 0.01);
    } else {
      total = PRODUCT.price_cop - DISCOUNT_FLASH_P.discount;
    }
  
    const formatoCOP = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  
    return formatoCOP.format(total);
  }
  
  

  getTotalPriceProduct(PRODUCT: any): string {
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
  
  

  getTotalCurrency(PRODUCT: any): string {
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
    setTimeout(() => {
      this.variation_selected = variation;
      MODAL_PRODUCT_DETAIL($);
    }, 50);
  }    


}

