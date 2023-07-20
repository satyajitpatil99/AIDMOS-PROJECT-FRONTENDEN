import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactiontypesComponent } from './transactiontypes.component';

describe('TransactiontypesComponent', () => {
  let component: TransactiontypesComponent;
  let fixture: ComponentFixture<TransactiontypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactiontypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactiontypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
