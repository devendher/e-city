import {Component,Output,EventEmitter,Input,OnInit} from '@angular/core';
import {Contact} from './app.contacts';
import {CONTACTS} from './mock-contacts';
import {ContactService} from './app.contactservice';

@Component({
	selector:'show-contacts',
	templateUrl:'./app.showcontacts.html'
})

export class ContactsShow implements OnInit{
	contacts:Contact[];

constructor(private contactservice:ContactService){


}
ngOnInit(){
	this.contactservice.getContacts().then(contacts => this.contacts = contacts);


}
}