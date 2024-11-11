import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIndividualComponent } from './section-individual.component';

describe('SectionIndividualComponent', () => {
  let component: SectionIndividualComponent;
  let fixture: ComponentFixture<SectionIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
