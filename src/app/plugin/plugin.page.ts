import { Component, OnInit } from '@angular/core';
import{Camera, CameraOptions}from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
})
export class PluginPage implements OnInit {

  base64Image: any;

  constructor(private camera: Camera) { }

  ngOnInit() {

  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  localizacao(){

  }

}
