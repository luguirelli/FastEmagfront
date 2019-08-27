import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefeitosComponent } from './defeitos.component';

describe('DefeitosComponent', () => {
  let component: DefeitosComponent;
  let fixture: ComponentFixture<DefeitosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefeitosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefeitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
