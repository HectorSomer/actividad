import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(readonly httpClient: HttpClient) { }
  getPersons():Observable<any>{
    let url = "https://dragonball-api.com/api/characters";
    let data = this.httpClient.get<any>(url)
    return data;
  }
}
