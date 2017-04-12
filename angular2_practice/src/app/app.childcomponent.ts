import {Component,Output,EventEmitter,Input,OnInit} from '@angular/core';
import {Contact} from './app.contacts';

@Component({
	selector:'child-component',
	templateUrl:'./app.childcomponent.html'
})

export class ChildComponent implements OnInit {

   contacts:Contact;
   MyMessage:string;

	@Input() message;
	 @Output() 
	 //notifyParent: EventEmitter<any> = new EventEmitter();
	 notifyParent:EventEmitter<any>=new EventEmitter();
	  sendNotification() {
        this.notifyParent.emit('Some value to send to the parent');
    }

    ngOnInit():any{
    	this.MyMessage="this is from child component";

    }
}
