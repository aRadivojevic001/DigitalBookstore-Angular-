import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousBookCartComponent } from './previous-book-cart.component';

describe('PreviousBookCartComponent', () => {
  let component: PreviousBookCartComponent;
  let fixture: ComponentFixture<PreviousBookCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousBookCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousBookCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
