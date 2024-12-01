import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
}
