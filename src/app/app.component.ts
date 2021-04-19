import { Component } from '@angular/core';
import { AllService } from './services/all.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public all:AllService,public storage:Storage) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
  goToVistorPage(){
    this.all.com.navForward('visitor-entry');
  }

  goToVistorLog(){
    this.all.com.navForward('visitor-log');
  }

  latestNews(){
    this.all.com.navForward('latest-news');
  }

}
