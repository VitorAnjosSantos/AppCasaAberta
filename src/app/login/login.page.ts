import { Component} from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private navCtlr: NavController) { }

  login(){
    //alert("click");
    this.navCtlr.navigateForward("tabs");
  }

}
