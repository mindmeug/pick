import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the Home page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  public edit = false;

  public contacts = [
    {
      "image": "/assets/penis.jpg",
      "name": "Mutti",
      "number": "+4917874989348"
    },
    {
      "image": "/assets/dick.jpg",
      "name": "Vati",
      "number": "+49178743429348"
    }
  ];

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello Home Page');
  }

  toggleEdit(){
    this.edit = !this.edit;
  }

  contactAction(contact) {
    if (this.edit) {
      // Edieiterne

    }
    else {
     // Anrufen
    }

  }

  addItem(){

  }

}
