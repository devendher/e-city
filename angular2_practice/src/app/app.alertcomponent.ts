import {Component,Input,Output} from '@angular/core';
import {AlertModule} from './app.alertcomponent.module';
@Component({
	selector:'alert-message',
	templateUrl:'./app.alertcomponent.html',
	styleUrls:['./app.alertcomponent.css']
})

export class AlertComponent{
	
	@Input() AlertMessage:string;
	@Input() AlertType:string;

}