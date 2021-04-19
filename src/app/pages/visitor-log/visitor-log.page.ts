import { Component, OnInit } from '@angular/core';
import { visitorDetails } from 'src/app/interface/visitorInterface';
import { AllService } from 'src/app/services/all.service';

@Component({
  selector: 'app-visitor-log',
  templateUrl: './visitor-log.page.html',
  styleUrls: ['./visitor-log.page.scss'],
})
export class VisitorLogPage implements OnInit {
  name = null;
  email= null;
  visitType = null;
  visitPerson = null;
  entryDate = new Date().toISOString();
  entrytime = null;
  exitTime = null;

  data:visitorDetails = null;

  constructor(public all:AllService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.all.storage.getVisitorData().then((res:visitorDetails) => {
      console.log(res);
      if(res){
        this.data = res;
        this.name = res.name;
        this.email = res.email;
        this.visitType = res.visitType;
        this.visitPerson = res.visitPerson;
        this.entryDate = res.entryDate;
        this.entrytime = res.entryTime;
        this.exitTime = res.exitTime;
      }
    });
  }

}
