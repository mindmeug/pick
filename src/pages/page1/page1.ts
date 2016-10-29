import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {Contacts} from 'ionic-native';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public contact;

  constructor(public navCtrl: NavController) {
    
  }

  //call by button
  addContact(){
    Contacts.pickContact().then(
        (contacts) => {
          this.contact = contacts;
        },
        (err) => {
          console.log(err);
        }
    );
  }

}
