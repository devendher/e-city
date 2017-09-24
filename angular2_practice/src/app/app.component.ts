import { Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my new angular2 application!';
   getNotification(evt) {
        // Do something with the notification (evt) sent by the child!
        console.log(evt);
        //console.log(evt.target.value);
    }
}
