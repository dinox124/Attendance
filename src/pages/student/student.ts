import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {

  moviesList;
  suname;
  constructor(public navCtrl: NavController,private http:Http) {
    this.http.get("https://citynews.herokuapp.com/get-all-cnews").toPromise().then((filmList) => {
      //console.log(filmList.json());
      this.moviesList = filmList.json();

    },(err) => {
      console.log(err);
    })
  }
  
  openReview(imgUrl,id){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
  }

}
