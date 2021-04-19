import { Component, OnInit } from '@angular/core';
import { visitorDetails } from 'src/app/interface/visitorInterface';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-visitor-entry',
  templateUrl: './visitor-entry.page.html',
  styleUrls: ['./visitor-entry.page.scss'],
})
export class VisitorEntryPage implements OnInit {

  name = null;
  email= null;
  visitType = null;
  visitPerson = null;
  entryDate = new Date().toISOString();
  entrytime = null;
  exitTime = null;
  constructor(public all: AllService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.name, this.email, this.visitType, this.visitPerson, this.entryDate, new Date(this.entrytime).toLocaleTimeString(), this.exitTime);
    if(this.name == null || this.name.length == 0){
      this.all.com.alertBox('Please Enter Visitor Name');
      return;
    }
    else if(!this.all.textregex.test(this.name)){
      this.all.com.alertBox('Please Enter Valid Visitor Name');
      return;
    }
    else if(this.email == null || this.email.length == 0){
      this.all.com.alertBox('Please Enter Email Id');
      return;
    }
    else if(!this.all.emailRegex.test(this.email)){
      this.all.com.alertBox('Please Enter Valid Email Id');
      return;
    }
    else if(this.visitType == null){
      this.all.com.alertBox('Please Select Visit type');
      return;
    }
    else if(this.visitPerson == null || this.visitPerson.length == 0){
      this.all.com.alertBox('Please Enter Vist Person Name');
      return;
    }
    else if(this.entrytime == null){
      this.all.com.alertBox('Please Select Entry Time');
      return;
    }
    else if(this.exitTime == null){
      this.all.com.alertBox('Please Select Exit Time');
      return;
    }
    else {
      let param: visitorDetails = {
        name:this.name,
        email: this.email,
        visitType: this.visitType,
        visitPerson: this.visitPerson,
        entryDate: this.entryDate,
        entryTime: this.entrytime,
        exitTime: this.exitTime,

      }
      this.all.storage.setVisitorData(param).then( () => {
        this.all.com.toatMsg('Data saved!!').then( toastEl => {
          toastEl.present();
        })
      });
    }
  }

  onVisitorLog(){
    this.all.com.navForward('visitor-log');
  }

}
