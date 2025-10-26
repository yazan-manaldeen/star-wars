import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddStarshipComponent} from './add-starship.component';

describe('AddFilmComponent', () => {
  let component: AddStarshipComponent;
  let fixture: ComponentFixture<AddStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStarshipComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
