import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicRoutes } from './dynamic-routes';

describe('DynamicRoutes', () => {
  let component: DynamicRoutes;
  let fixture: ComponentFixture<DynamicRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
