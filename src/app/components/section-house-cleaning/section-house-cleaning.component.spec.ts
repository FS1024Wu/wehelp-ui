import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHouseCleaningComponent } from './section-house-cleaning.component';

describe('SectionHouseCleaningComponent', () => {
  let component: SectionHouseCleaningComponent;
  let fixture: ComponentFixture<SectionHouseCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHouseCleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHouseCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
