import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Workshop } from '../models/workshop.model';

@Injectable({
  providedIn: 'root',
})
export class WorkshopService {

  constructor(private httpClient: HttpClient) {

  }

  getAllWorkshops() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.get('http://localhost:3000/workshops/workshops');
  }

  getOneWorkshop(id: number) {
    console.log('go', id)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.get(`http://localhost:3000/workshops/workshop/${id}`);
  }
}
