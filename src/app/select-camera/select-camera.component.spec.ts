import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCameraComponent } from './select-camera.component';

describe('SelectCameraComponent', () => {
  let component: SelectCameraComponent;
  let fixture: ComponentFixture<SelectCameraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCameraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
