import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hour',
  templateUrl: 'hour.html',
})
export class HourPage {
  
 public display = new Date().toLocaleDateString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
     var displayDate = new Date().toLocaleDateString();
    console.log(displayDate)
    console.log('ionViewDidLoad HourPage');
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  openstudent() {
    this.navCtrl.push("StudentPage")
  }
}
