import { Component } from '@angular/core';
import { GetdataService } from '../getdata.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
z=[]
 constructor(public a:GetdataService,) {
this.a.getdata1().subscribe(data=>{  this.z=data as any})
}
/* constructor(private user1: GetdataService,){
    this.user1.states().subscribe(data=>{
      this.z=data as any
    })
}*/
}
