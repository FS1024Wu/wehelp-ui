import { Routes } from '@angular/router';
import {SectionMovingComponent} from './components/section-moving/section-moving.component';
import {SectionIndividualComponent} from './components/section-individual/section-individual.component';
import {SectionHouseCleaningComponent} from './components/section-house-cleaning/section-house-cleaning.component';
import {SectionDeepCleaningComponent} from './components/section-deep-cleaning/section-deep-cleaning.component';
import {SectionBusinessComponent} from './components/section-business/section-business.component';
import {SectionTaxiComponent} from './components/section-taxi/section-taxi.component';
import {SectionAboutComponent} from './components/section-about/section-about.component';

export const routes: Routes = [
  { path: 'moving', component: SectionMovingComponent },
  { path: 'taxi', component: SectionTaxiComponent },
  { path: 'house', component: SectionHouseCleaningComponent },
  { path: 'deep', component: SectionDeepCleaningComponent },
  { path: 'individual', component: SectionIndividualComponent },
  { path: 'business', component: SectionBusinessComponent },
  { path: 'about', component: SectionAboutComponent },

  // Add routes for all 7 sections
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about' },];
