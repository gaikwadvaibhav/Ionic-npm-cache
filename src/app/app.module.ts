import { FilesPage } from './../pages/files/files';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImgCacheServiceProvider } from '../providers/img-cache-service/img-cache-service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { IonicImageLoader } from 'ionic-image-loader';

import { CacheModule } from "ionic-cache";

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicImageLoader.forRoot(),

    CacheModule.forRoot({ keyPrefix: 'my-app-cache' }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ImgCacheServiceProvider,
    File,
    FileChooser,
    FileTransfer,
    Camera,
    FileTransferObject
  ]
})
export class AppModule { }
