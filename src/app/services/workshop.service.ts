import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Workshop } from '../models/workshop.model';

@Injectable({
  providedIn: 'root',
})
export class WorkshopService {

  constructor(private httpClient: HttpClient) {

  }

  getWorkshop() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.get('/api/blogs');
  }
}
