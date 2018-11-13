import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTurboTableComponent } from './test-turbo-table.component';

describe('TestTurboTableComponent', () => {
  let component: TestTurboTableComponent;
  let fixture: ComponentFixture<TestTurboTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTurboTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTurboTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
