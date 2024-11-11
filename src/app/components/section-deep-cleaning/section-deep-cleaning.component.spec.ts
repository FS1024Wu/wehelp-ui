import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDeepCleaningComponent } from './section-deep-cleaning.component';

describe('SectionDeepCleaningComponent', () => {
  let component: SectionDeepCleaningComponent;
  let fixture: ComponentFixture<SectionDeepCleaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDeepCleaningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDeepCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
