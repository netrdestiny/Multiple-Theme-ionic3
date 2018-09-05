import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppState } from '../../app/app.global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  theme: any;

  constructor(public global: AppState,public navCtrl: NavController) {

  }

  changeTheme(theme) {
    console.log('IN');
    this.global.set('theme', theme);
  }

}
