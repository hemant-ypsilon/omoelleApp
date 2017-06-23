import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import {ForgotpassPage} from '../../pages/forgotpass/forgotpass';
import {SignupPage} from '../../pages/signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

homemove(){
  this.navCtrl.setRoot(HomePage);
}


signuppage(){
  this.navCtrl.setRoot(SignupPage);
}


forgotpasslnk(){
  this.navCtrl.setRoot(ForgotpassPage)
}

  constructor(public navCtrl: NavController) {

  }

}
 
