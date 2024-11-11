import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SectionMovingComponent} from './components/section-moving/section-moving.component';
import {SectionTaxiComponent} from './components/section-taxi/section-taxi.component';
import {SectionHouseCleaningComponent} from './components/section-house-cleaning/section-house-cleaning.component';
import {SectionDeepCleaningComponent} from './components/section-deep-cleaning/section-deep-cleaning.component';
import {SectionAboutComponent} from './components/section-about/section-about.component';
import {SectionIndividualComponent} from './components/section-individual/section-individual.component';
import {SectionBusinessComponent} from './components/section-business/section-business.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterOutlet, SectionMovingComponent, SectionTaxiComponent, SectionHouseCleaningComponent, SectionDeepCleaningComponent, SectionAboutComponent, SectionIndividualComponent, SectionBusinessComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
}
