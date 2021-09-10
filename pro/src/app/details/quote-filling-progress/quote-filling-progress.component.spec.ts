import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFillingProgressComponent } from './quote-filling-progress.component';

describe('QuoteFillingProgressComponent', () => {
  let component: QuoteFillingProgressComponent;
  let fixture: ComponentFixture<QuoteFillingProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteFillingProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteFillingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
