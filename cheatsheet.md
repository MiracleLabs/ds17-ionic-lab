# Cheat Sheet : Creating your first Hybrid Mobile Application  with Ionic2

The below markdown file consists of commands, links and code snippets that will help you complete and understand the lab - Creating your first Hybrid App with Ionic.

## Important Links

Download Visual Studio Code  - https://code.visualstudio.com/download

## Commands

To install Cordova with npm,

```shell
npm install -g cordova
```
To install Ionic framework with npm,

```shell
npm install -g ionic@2.2.3
```

To create a new blank ionic application,

```shell
ionic start <application-name> blank
```

To create a new page in ionic application,

```shell
ionic g page <page name>
```
To simulate the app in your browser,

```shell
ionic serve
```
To simulate the app in your browser along with platform,

```shell
ionic serve --lab
```

## Code Snippets

### app.module.ts

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SecondPage } from '../pages/second-page/second-page';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SecondPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SecondPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```

### home.html

```html
<ion-header>
  <ion-navbar color="headerColor">
    <ion-title text-center>
      DS'17 Hello Word App
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>

  <!-- DS'17 Logo    -->
  <div text-center>
    <img  src="assets/imgs/ds17logo.png" width="100" height="100">
  </div>

  <!-- Login Form  -->
  <ion-item >
    <ion-label floating><ion-icon name="person" ></ion-icon>  Username</ion-label>
    <ion-input type="text" name="username"  ></ion-input>
  </ion-item>

  <ion-item class="login-signup">
    <ion-label floating>  
      <ion-icon name="lock"></ion-icon> Password
    </ion-label>
       <ion-input type="password" name="password" ></ion-input>
  </ion-item>
  <div text-center padding>
       <button  type="submit" ion-button class="lButton" (click) = "nextPage()">Login</button>
  </div>
  <div text-center>
    <img  src="assets/imgs/Miracle_Black.png">
  </div>
</ion-content>

<ion-footer>
  <h6 class="copyRight" text-center> Miracle Software Systems, Inc. 2017 </h6>    
</ion-footer>
```

### home.scss

```css
.lButton{
    width:105%;
    text-transform: none;
    background-color: #d33257
}
.fPwd{
    color: #00aae7;
    margin-top: -7px;
}
```
### home.ts

```javascript
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second-page/second-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nextPage() {
        this.navCtrl.push(SecondPage);    
  }

}
```

### second-page.html

```html
<!--
  Generated template for the SecondPage page.

  See http://ionicframework.com/docs/components/#navigation for more info on
  Ionic pages and navigation.
-->
<ion-header>

  <ion-navbar color="headerColor">
    <ion-title>Second Page</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>

  <h4 text-center> This is Second Page </h4>

  <div text-center padding>
      <button  type="submit" ion-button class="lButton" (click) = "goBack()">Go Back</button>
   </div>

</ion-content>
```

### second-page.ts

```javascript
import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-second-page',
  templateUrl: 'second-page.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  goBack(){
    this.navCtrl.push(HomePage);        
  }
}
```

### theme/variable.scss - Add the below code snippet

```css
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  headerColor: #d33257
);
```
