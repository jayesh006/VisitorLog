import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// const Url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2021-04-19&sortBy=publishedAt&apiKey=8597caf35fc24e5e8c76fb843ae9a197';
const Url = 'https://newsapi.org/v2/everything';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getNews(){
    var param = {
      q:'bitcoin',
      from:'2021-04-19',
      sortBy:'publishedAt',
      apiKey:'8597caf35fc24e5e8c76fb843ae9a197'
    };
    return new Promise( (resolve, reject) => {
      return this.http.get(Url+`?q=${param.q}&from=${param.from}&sortBy=${param.sortBy}&apiKey=${param.apiKey}`).subscribe(
        res=> {
          resolve(res);
        },
        error => {
          reject(error);
        }
      );
    });
  }
}
