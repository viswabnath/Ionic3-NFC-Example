import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReadNfcPage } from '../read-nfc/read-nfc';
import { WriteNfcPage } from '../write-nfc/write-nfc';
/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  read(){
    this.navCtrl.push(ReadNfcPage);
  }

  Write(){
    this.navCtrl.push(WriteNfcPage);
  }

}
