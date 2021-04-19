import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(public storage: Storage) {}
  setVisitorData(data){
    return this.storage.set('visitor', data);
  }

  getVisitorData(){
    return this.storage.get('visitor');
  }
}
