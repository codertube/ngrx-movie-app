import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let movies = [{
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
  }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  }));

  beforeEach(() => {
    service = TestBed.get(MovieService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllMovies', () => {
    spyOn(service, 'getAllMovies').and.returnValue(of(movies));
    service.getAllMovies();
    expect(service.getAllMovies).toHaveBeenCalled();
  });

});