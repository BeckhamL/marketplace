import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  constructor(private httpClient: HttpClient) {

  }

  postMessageUs(message: MessageModel) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.httpClient.post<MessageModel>('/contact', message);
  }
}
