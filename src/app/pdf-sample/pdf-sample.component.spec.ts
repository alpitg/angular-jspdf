import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSampleComponent } from './pdf-sample.component';

describe('PdfSampleComponent', () => {
  let component: PdfSampleComponent;
  let fixture: ComponentFixture<PdfSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
