import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SubcategoryPage} from '../../pages/subcategory/subcategory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 movetosuCate(){

  this.navCtrl.push(SubcategoryPage);

}
  constructor(public navCtrl: NavController) {

  }

}
