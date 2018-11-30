import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	username: string;
	password:string;
	repassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
  	//Check that username is at least 6 characters long. Alert message if not.
  	if(this.username.length<6) {
  		alert("Username must be at least 6 characters long");
  	}
  	//Check that password is at least 6 characters long. Alert message if not.
  	if(this.password.length<6) {
  		alert("Password must be at least 6 characters long");
  	}
  	//Check that both passwords match. Alert message if not.
  	if(this.password !== this.repassword) {
  		alert("Passwords do not match!");
  	}
  }
}
