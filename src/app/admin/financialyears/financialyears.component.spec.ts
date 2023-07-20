import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialyearsComponent } from './financialyears.component';

describe('FinancialyearsComponent', () => {
  let component: FinancialyearsComponent;
  let fixture: ComponentFixture<FinancialyearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialyearsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialyearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
