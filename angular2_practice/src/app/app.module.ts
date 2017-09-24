import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule,RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ChildComponent} from './app.childcomponent';
import {ContactService} from './app.contactservice';

import { AppComponent } from './app.component';
import {ContactsShow} from './app.showcontacts';
import {AlertComponent} from './app.alertcomponent';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ContactsShow,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'addcontacts',
        component: ChildComponent
      },
      {
        path:'showcontacts',
        component:ContactsShow
      },
       {
        path:'alertmessage',
        component:AlertComponent
      }
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
