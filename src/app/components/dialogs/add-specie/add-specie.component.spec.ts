import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AddSpecieComponent} from './add-specie.component';

describe('AddCharacterComponent', () => {
  let component: AddSpecieComponent;
  let fixture: ComponentFixture<AddSpecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSpecieComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AddSpecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
