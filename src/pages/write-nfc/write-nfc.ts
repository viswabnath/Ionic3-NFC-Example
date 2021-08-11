import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Subscription } from 'rxjs/Rx'
import { MainPage } from '../main/main';

@IonicPage()
@Component({
  selector: 'page-write-nfc',
  templateUrl: 'write-nfc.html',
})
export class WriteNfcPage {

  tagData: any;
  loading: any;
  content: any;
  tagContent: any;
  subscriptions: Array<Subscription> = new Array<Subscription>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController,
    private nfc: NFC, private ndef: Ndef) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WriteNfcPage');
  }

  write() {
    this.loading = this.loadingController.create({ content: "Please wait" });
    this.loading.present();
    var tcontent = this.tagContent;
    this.subscriptions.push(
      this.nfc.addNdefListener().subscribe(data => {
        if (data.tag.isWritable = true) {
          var content = this.ndef.textRecord(tcontent);
          this.nfc.write([content]).then((resolve) => {
            if (resolve === "OK") {
              alert('Write Success');
              this.loading.dismissAll();
              this.navCtrl.setRoot(MainPage);
            }
            else {
              alert('Write Fail');
              this.loading.dismissAll();
              this.navCtrl.pop();
            }
          })
        }
      }
      )
    )
  }

  ionViewWillLeave() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

}
