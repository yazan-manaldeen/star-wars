import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ObjectCardsComponent} from './object-cards.component';

describe('ObjectCardsComponent', () => {
  let component: ObjectCardsComponent;
  let fixture: ComponentFixture<ObjectCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectCardsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ObjectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
