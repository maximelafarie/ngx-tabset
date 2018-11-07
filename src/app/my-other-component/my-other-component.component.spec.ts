import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOtherComponentComponent } from './my-other-component.component';

describe('MyOtherComponentComponent', () => {
  let component: MyOtherComponentComponent;
  let fixture: ComponentFixture<MyOtherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOtherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOtherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
