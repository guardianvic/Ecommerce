import { Component } from '@angular/core';
import { HomeService } from '../../home/service/home.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


// declare function MODAL_PRODUCT_DETAIL([]):any;
// declare function LANDING_PRODUCT([]):any;
// declare function MODAL_QUANTITY_LANDING([]):any;
// declare var $:any;

@Component({
  selector: 'app-landing-product',
  standalone: true,
  imports: [],
  templateUrl: './landing-product.component.html',
  styleUrl: './landing-product.component.css'
})
export class LandingProductComponent {

  PRODUCT_SLUG:any;
  PRODUCT_SELECTED:any;
  // variation_selected:any;
  // sub_variation_selected:any;
  // PRODUCT_RELATEDS:any = [];
  // product_selected_modal:any;
  // CAMPAING_CODE:any;
  // DISCOUNT_CAMPAING:any;

  // currency:string = 'COP';
  // plus:number = 0;

  // reviews:any = []

  constructor(
    public homeService: HomeService,
    public activedRoute: ActivatedRoute,
     private toastr: ToastrService,
     private router:Router,
  ){  
      this.activedRoute.params.subscribe((resp:any) => {
      this.PRODUCT_SLUG = resp.slug;
      })

      this.homeService.showProduct(this.PRODUCT_SLUG).subscribe((resp:any) => {
       console.log(resp);
       if (resp.message == 403) {
        this.toastr.error("Validacion",resp.message_text);
        this.router.navigateByUrl("/");
       }else{
         this.PRODUCT_SELECTED = resp.product;
       }
      })
  }
} 
