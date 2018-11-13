import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbotableComponent } from './turbotable.component';

describe('TurbotableComponent', () => {
  let component: TurbotableComponent;
  let fixture: ComponentFixture<TurbotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurbotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurbotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
