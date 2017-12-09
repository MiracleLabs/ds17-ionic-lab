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
