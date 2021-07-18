import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'

})
export class RestServiceService {
  url = 'http://localhost:3000/user'
  constructor(private http: HttpClient) { }
  getListOfData() {
    return this.http.get(this.url);
  }

  addData(data:any) {
    // console.warn(data)
    return this.http.post(this.url, data);
  }

}
