import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
 import {MycartPage} from '../../pages/my_cart/my_cart';

@Component({
  selector: 'page-productlist',
  templateUrl: 'productlist.html'
})
export class ProductlistPage {
   movetosuMycart(){

   this.navCtrl.push(MycartPage);

  }
  constructor(public navCtrl: NavController) {

  }

}
