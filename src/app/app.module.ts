import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SubcategoryPage } from '../pages/subcategory/subcategory';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
import { ProductlistPage } from '../pages/productlist/productlist';
import { MycartPage } from '../pages/my_cart/my_cart';
import { SignupPage } from '../pages/signup/signup';
import {AccountinfoPage} from '../pages/account_info/account_info';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SubcategoryPage,
    ForgotpassPage,
    ProductlistPage,
    MycartPage,
    SignupPage,
    AccountinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SubcategoryPage,
    ForgotpassPage,
    ProductlistPage,
    MycartPage,
    SignupPage,
    AccountinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
