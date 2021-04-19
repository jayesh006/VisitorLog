import { Injectable } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public toastCtrl: ToastController) { }

  navForward(page){
    this.navCtrl.navigateForward(page);
  }

  navBack(){
    this.navCtrl.back();
  }

  alertBox(message){
    this.alertCtrl.create({message:message,buttons:['Okay']}).then(alertEl => {
      alertEl.present();
    });
  }

  async toatMsg(message){
    return this.toastCtrl.create({message:message,duration: 2000});
  }

}
