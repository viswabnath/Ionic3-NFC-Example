import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadNfcPage } from './read-nfc';

@NgModule({
  declarations: [
    ReadNfcPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadNfcPage),
  ],
})
export class ReadNfcPageModule {}
