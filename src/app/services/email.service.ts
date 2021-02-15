import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  postEmail(message: string) {
    return this.httpClient.post<string>('/general/email', message);
  }
}
