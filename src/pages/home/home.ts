import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TelegramPage } from '../telegram/telegram';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  hello() {
    this.navCtrl.push(TelegramPage)
  }

}
