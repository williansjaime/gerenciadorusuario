import { Injectable } from '@angular/core';
import { User } from '../Interface/InterfaceUsuario';
import { API_URL , API_URL_FLASK} from '../env';

@Injectable({
  providedIn: 'root'
})
export class UsuarioserviceService {
  url_API:string = "";

  constructor() { 
    this.url_API = "/api/v2/users";
  }

  async GET(url:string){
    try{        
        const requestOptions = {
          method: 'GET',
          headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*' //http://localhost:4200
          },
        };
        const data = await fetch(url,requestOptions)
            .then(response => response.json());
        return data;
      } catch (error) {
        return error;
      } 
  }

  async POST(url:string,dataJSON:User[])
  { 
    try{
        const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:4200'
          },
          body: JSON.stringify(dataJSON)
        };
        const data = await fetch(url, requestOptions)
        .then(response => response.json());
        return data;
    } catch (error) {
      return error;
    }  
  } 

  async DELETE(url:string,dataJSON:any[])
  { 
    try{
        const requestOptions = {
          method: 'DELETE',
          headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:4200'
          },
          body: JSON.stringify(dataJSON)
        };
        const data = await fetch(url, requestOptions)
        .then(response => response.json());
        return data;
    } catch (error) {
      return error;
    }  
  } 
  
}