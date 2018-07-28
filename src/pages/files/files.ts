import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileChooser } from '../../../node_modules/@ionic-native/file-chooser';
import { FileTransfer } from '../../../node_modules/@ionic-native/file-transfer';
import { Camera, CameraOptions } from '../../../node_modules/@ionic-native/camera';

/**
 * Generated class for the FilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-files',
  templateUrl: 'files.html',
})
export class FilesPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private file: File,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private camera: Camera  
  ) {
    this.filess()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilesPage');
  }

  filess() {

    console.log('in filess', this.file)
    this.file.checkDir(this.file.cacheDirectory, 'cache').then(_ => console.log('Directory exists'))
    .catch(err => console.log('Directory doesn\'t exist'));
  }

  openFile(event) {
    console.log('event', event)
    this.fileChooser.open()
  .then(uri => console.log(uri))
  .catch(e => console.log(e));
  }

  // const options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }
  


}
