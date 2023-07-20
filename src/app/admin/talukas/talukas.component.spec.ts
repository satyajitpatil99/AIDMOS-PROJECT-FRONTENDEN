import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukasComponent } from './talukas.component';

describe('TalukasComponent', () => {
  let component: TalukasComponent;
  let fixture: ComponentFixture<TalukasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalukasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalukasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
