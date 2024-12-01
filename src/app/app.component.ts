import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SectionComponent} from './section.component';
import {NavbarComponent} from './navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SectionComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
