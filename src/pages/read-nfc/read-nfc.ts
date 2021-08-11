import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Nav } from 'ionic-angular';
import { NFC, Ndef } from "@ionic-native/nfc";
import { Platform } from 'ionic-angular';
import { Subscription } from 'rxjs/Rx';

@IonicPage()
@Component({
  selector: 'page-read-nfc',
  templateUrl: 'read-nfc.html',
})
export class ReadNfcPage {

  scanned: boolean;
  tagId: string;
  tagContent: string;
  platform: any;
  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(platform: Platform, public alertCtrl: AlertController, public navCtrl: NavController, public loadingController: LoadingController, public navParams: NavParams, private nfc: NFC, private ndef: Ndef,
  ) {
    this.resetScanData();
  }

  resetScanData() {
    this.scanned = false;
    this.tagId = "";
    this.start();
  }

  start() {
    this.nfc.enabled().then((resolve) => {
      this.addListenNFC();
    }).catch((reject) => {
      if (reject == 'NO_NFC') {
        let alert = this.alertCtrl.create({
          title: ' ERROR',
          message: 'NFC is not available in your device. Please come up with a NFC device to avoid this message.',
          buttons: [{
            text: "ok", handler: () => {
              this.platform.exitApp();
            }
          }]
        })
        alert.present();

      }
      else if (reject == 'NFC_DISABLED') {
        let alert = this.alertCtrl.create({
          title: ' ERROR',
          message: 'Please enable NFC to avoid this message.',
          buttons: [{
            text: "ok", handler: () => {
              this.nfc.showSettings();
            }
          }]
        })
        alert.present();
      }
    });
  }

  addListenNFC() {
    this.subscriptions.push(

      this.nfc.addNdefListener(() => {
        console.log('successfully attached ndef listener');
      }, (err) => {
        console.log('error attaching ndef listener', err);
      }).subscribe((event) => {
        console.log('received ndef message. the tag contains: ', event.tag);
        console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
        console.log('Message', this.nfc.bytesToString(event.tag.ndefMessage[0].payload).substring(3));
        this.tagId = this.nfc.bytesToHexString(event.tag.id);
        this.tagContent = this.nfc.bytesToString(event.tag.ndefMessage[0].payload).substring(3);
      })
    )
  }

  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }



}
