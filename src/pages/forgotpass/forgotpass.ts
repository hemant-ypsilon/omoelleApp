import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 import {HomePage} from '../../pages/home/home';

@Component({
  selector: 'page-forgotpass',
  templateUrl: 'forgotpass.html'
})
export class ForgotpassPage {

homemove(){

  this.navCtrl.setRoot(HomePage);


}

  constructor(public navCtrl: NavController) {

  }

}
 
