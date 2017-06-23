import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccountinfoPage} from '../../pages/account_info/account_info';
import {LoginPage} from '../../pages/login/login';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  accountinfo(){
  this.navCtrl.setRoot(AccountinfoPage);
}
 loginpage(){
  this.navCtrl.setRoot(LoginPage);
}
  constructor(public navCtrl: NavController) {

  }

}