import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ProductlistPage} from '../../pages/productlist/productlist';

@Component({
  selector: 'page-subcategory',
  templateUrl: 'subcategory.html'
})
export class SubcategoryPage {

  productlists(){
 this.navCtrl.push(ProductlistPage);
 }
  constructor(public navCtrl: NavController) {

  }

}
