import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imputfield } from './imputfield';

describe('Imputfield', () => {
  let component: Imputfield;
  let fixture: ComponentFixture<Imputfield>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imputfield]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imputfield);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
