import {Component,OnInit,Injectable} from '@angular/core';
import {Contact} from './app.contacts';
import {CONTACTS} from './mock-contacts';
@Injectable()
export class ContactService {
	getContacts(): Promise<Contact[]> {
    return Promise.resolve(CONTACTS);
  }
}