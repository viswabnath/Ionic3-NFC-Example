import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { NFC, Ndef } from "@ionic-native/nfc";
import { MainPage } from '../pages/main/main';
import { ReadNfcPage } from '../pages/read-nfc/read-nfc';
import { WriteNfcPage } from '../pages/write-nfc/write-nfc';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ReadNfcPage,
    WriteNfcPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ReadNfcPage,
    WriteNfcPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NFC, Ndef,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
