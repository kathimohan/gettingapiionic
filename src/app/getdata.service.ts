import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http'
import {ToastController} from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http:HttpClient,private toastCtrl:ToastController,) {}

getdata1(){
      let url = "http://127.0.0.1:8000/";
      return this.http.get(url);
    }
    signin(user1){
         return this.http.post("http://127.0.0.1:8000/authenticate/",user1);
       }
}
