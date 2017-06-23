import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {SubcategoryPage} from '../../pages/subcategory/subcategory';

@Component({
  selector: 'page-my_cart',
  templateUrl: 'my_cart.html'
})
export class MycartPage {
  movetosuMycart(){
  this.navCtrl.push(MycartPage);
  }
  constructor(public navCtrl: NavController) {

  }

}
