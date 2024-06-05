import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionContactsComponent } from './addition-contacts.component';

describe('AdditionContactsComponent', () => {
  let component: AdditionContactsComponent;
  let fixture: ComponentFixture<AdditionContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionContactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
