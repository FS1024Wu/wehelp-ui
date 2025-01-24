import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMovingComponent } from './section-moving.component';

describe('SectionMovingComponent', () => {
  let component: SectionMovingComponent;
  let fixture: ComponentFixture<SectionMovingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMovingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
