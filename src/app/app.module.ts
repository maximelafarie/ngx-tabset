import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsModule } from '../ngx-tabset';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyOtherComponentComponent } from './my-other-component/my-other-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyOtherComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
