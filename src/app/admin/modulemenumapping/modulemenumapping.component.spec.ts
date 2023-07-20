import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulemenumappingComponent } from './modulemenumapping.component';

describe('ModulemenumappingComponent', () => {
  let component: ModulemenumappingComponent;
  let fixture: ComponentFixture<ModulemenumappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulemenumappingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulemenumappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
