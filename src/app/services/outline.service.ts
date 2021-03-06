import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Workshop } from '../models/workshop.model';

@Injectable({
  providedIn: 'root',
})
export class OutlineService {

  constructor(private httpClient: HttpClient) {

  }

  getAllOutlines() {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.get('/courses/courses');
  }

  getOneOutline(id: number) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.get(`/courses/course/${id}`);
  }
}
