import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user1={};
  isTextFieldType: boolean;
    togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
}
  constructor(public user:GetdataService,private navCtrl:NavController,private router:Router) { }

  ngOnInit() {
  }
  async save(user1){
    if(!user1.username || user1.username=='' ){
  //   this.user.toast("Please enter the username",'bottom',3000,'normalToast')
alert("Please Enter the username")
    }
    else if(!user1.password ){
  //  this.user.toast("Please enter the password",'bottom',3000,'normalToast')
    alert("Please Enter the password")
    }
    else{
    let obj = this;
      obj.user.signin(obj.user1).subscribe((res:any)=>{
          if(res.token){alert("Successfully Logged in")
          obj.navCtrl.navigateBack('/loginpage')}
        }, error => {
      alert("Provided Credentials are wrong or not connected with the server")
        });
  }
}
}
