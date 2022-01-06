import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular'
import {Router} from '@angular/router'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private navCtrl:NavController,private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
  }
  async logout(){
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: '<strong>Do you want to Logout !</strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            localStorage.clear();
    this.navCtrl.navigateBack('/home');
          }
        }
      ]
    });

    await alert.present();
  }
}
