import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/service/auth.service';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(

    public http: HttpClient,
    public authService: AuthService,
    
  ) { }

  home(){
    let URL = URL_SERVICIOS+"/ecommerce/home";
    return this.http.get(URL);
  }
}
