import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  constructor() { }
  private readonly _HttpClient : HttpClient = inject(HttpClient)
  sendData(data:object):Observable<any> {
    return this._HttpClient.post('http://upskilling-egypt.com:3001/contact', data)
  }
}
