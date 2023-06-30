import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBookCartComponent } from './current-book-cart.component';

describe('CurrentBookCartComponent', () => {
  let component: CurrentBookCartComponent;
  let fixture: ComponentFixture<CurrentBookCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBookCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBookCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
