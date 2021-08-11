import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WriteNfcPage } from './write-nfc';

@NgModule({
  declarations: [
    WriteNfcPage,
  ],
  imports: [
    IonicPageModule.forChild(WriteNfcPage),
  ],
})
export class WriteNfcPageModule {}
