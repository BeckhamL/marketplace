import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorkshopService {

  constructor(private httpClient: HttpClient) {

  }

  addToUsersFavourite() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.get('http://localhost:3000/user');
  }
}
