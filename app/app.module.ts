import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
    // Other components, directives, or pipes
  ],
  imports: [
    BrowserModule,
    // Other Angular modules or third-party modules
  ],
  providers: [
    // Services or providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
