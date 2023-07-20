import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermodulemappingComponent } from './usermodulemapping.component';

describe('UsermodulemappingComponent', () => {
  let component: UsermodulemappingComponent;
  let fixture: ComponentFixture<UsermodulemappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermodulemappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermodulemappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
