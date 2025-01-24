import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { SectionComponent } from './section.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AddressComponent} from './components/address/address.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    NavbarComponent,
    SectionComponent,
    AddressComponent,
    RouterModule.forRoot(routes),
    AddressComponent
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
