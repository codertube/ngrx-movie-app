import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const storeMock = {
    select() {
      return of({
        movies: [{
          "id": 1,
          "name": "Bangalore Days",
          "rating": 5,
          "language": "Malayalam"
        },
        {
          "id": 2,
          "name": "Super Deluxe",
          "rating": 5,
          "language": "Tamil"
        }],
        loading: false,
        error: null,
        selectedMovie: null
      });
    },

    dispatch(obj) {
      console.log('dispatching from the mock store!')
    },

    pipe(obj) {
      console.log('pipe from the mock store!')
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: Store,
          useValue: storeMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ratingComponentClick', () => {
    spyOn(component, 'ratingComponentClick');
    const selectedMovie = {
      "id": 2,
      "name": "Super Deluxe",
      "rating": 5,
      "language": "Tamil"
    }
    component.ratingComponentClick(selectedMovie);
    expect(component.ratingComponentClick).toHaveBeenCalled();
  });

  it('should call randomRating', () => {
    spyOn(component, 'randomRating');
    component.randomRating();
    expect(component.randomRating).toHaveBeenCalled();
  });

});