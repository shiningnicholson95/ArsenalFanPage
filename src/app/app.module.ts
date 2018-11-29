import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LegendsComponent } from './legends/legends.component';
import { CurrentComponent } from './current/current.component';
import { HomeComponent } from './home/home.component';
import { LegendsviewComponent } from './legendsview/legendsview.component';
import { ArsenalService } from './arsenal.service';

@NgModule({
  declarations: [
    AppComponent,
    LegendsComponent,
    CurrentComponent,
    HomeComponent,
    LegendsviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([

      { path: 'home', component: HomeComponent },
      { path: 'legends', component: LegendsComponent },
      { path: 'current', component: CurrentComponent },
      {path:'legends/:ID', component:LegendsviewComponent}
      //{ path: '**', component: AppComponent}
    ])
  ],
  providers: [ArsenalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
