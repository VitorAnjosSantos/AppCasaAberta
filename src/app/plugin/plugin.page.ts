import { Component, OnInit } from '@angular/core';
import{Camera, CameraOptions}from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.page.html',
  styleUrls: ['./plugin.page.scss'],
})
export class PluginPage implements OnInit {

  base64Image: string[];
  geo = {latitude: 0, longitude: 0};

  constructor(private camera: Camera, private geoLocation: Geolocation) { }

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
     this.base64Image.push ('data:image/jpeg;base64,' + imageData);
    }, (err) => {
     // Handle error
    });
  }

  localizacao(){

    this.geoLocation.getCurrentPosition().then((resp) => {

      this.geo.latitude  = resp.coords.latitude;
      this.geo.longitude  = resp.coords.longitude;
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

}
