import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonsComponent } from './card-persons.component';

describe('CardPersonsComponent', () => {
  let component: CardPersonsComponent;
  let fixture: ComponentFixture<CardPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
