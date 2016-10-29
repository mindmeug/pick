import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the EditContact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-edit-contact',
  templateUrl: 'edit-contact.html'
})
export class EditContact {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello EditContact Page');
  }

}
