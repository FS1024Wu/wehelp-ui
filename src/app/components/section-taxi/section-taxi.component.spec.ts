import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTaxiComponent } from './section-taxi.component';

describe('SectionTaxiComponent', () => {
  let component: SectionTaxiComponent;
  let fixture: ComponentFixture<SectionTaxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTaxiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
