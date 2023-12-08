import { Injectable } from '@angular/core';
import { API_URL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {
  url_API:string = "";

  constructor() { 
    this.url_API = "/api/v2/users";
  }

  async GET(){
    try{
        this.url_API = "/api/v2/users";
        const requestOptions = {
          method: 'GET',
          headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*' //http://localhost:4200
          },
        };
        const data = await fetch(API_URL+this.url_API,requestOptions)
            .then(response => response.json());
        return data;
      } catch (error) {
        return error;
      } 
  }
  
}