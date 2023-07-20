import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulemenusComponent } from './modulemenus.component';

describe('ModulemenusComponent', () => {
  let component: ModulemenusComponent;
  let fixture: ComponentFixture<ModulemenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulemenusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulemenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
