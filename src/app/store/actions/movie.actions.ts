import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Movie } from '../../models/movie.model';

export enum MovieActionTypes {
  LoadMovies = '[Movie] Load Movies',
  LoadMoviesSuccess = '[Movie] Load Movies success',
  LoadMoviesFail = '[Movie] Load Movies fail',
  UpdateMovieRating = '[Movie] Update Movie rating',
  UpdateMovieRatingSuccess = '[Movie] Update Movie rating success',
  UpdateMovieRatingFail = '[Movie] Update Movie rating fail',
  RandomMovieRating = '[Movie] Random Movie rating',
  RandomMovieRatingSuccess = '[Movie] Random Movie rating success',
  RandomMovieRatingFail = '[Movie] Random Movie rating fail'
}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LoadMovies;
}

export class LoadMoviesSuccess implements Action {
  readonly type = MovieActionTypes.LoadMoviesSuccess;
  constructor(public payload: Movie[]) { }
}

export class LoadMoviesFail implements Action {
  readonly type = MovieActionTypes.LoadMoviesFail;
  constructor(public payload: HttpErrorResponse) { }
}

export class UpdateMovieRating implements Action {
  readonly type = MovieActionTypes.UpdateMovieRating;

  constructor(public payload: Movie) {}
}

export class UpdateMovieRatingSuccess implements Action {
  readonly type = MovieActionTypes.UpdateMovieRatingSuccess;

  constructor(public payload: Movie) {}
}

export class UpdateMovieRatingFail implements Action {
  readonly type = MovieActionTypes.UpdateMovieRatingFail;

  constructor(public payload: string) {}
}

export class RandomMovieRating implements Action {
  readonly type = MovieActionTypes.RandomMovieRating;

  constructor(public payload: Movie) {}
}

export class RandomMovieRatingSuccess implements Action {
  readonly type = MovieActionTypes.RandomMovieRatingSuccess;

  constructor(public payload: Movie) {}
}

export class RandomMovieRatingFail implements Action {
  readonly type = MovieActionTypes.RandomMovieRatingFail;

  constructor(public payload: string) {}
}

export type MovieActions = LoadMovies 
  | LoadMoviesSuccess 
  | LoadMoviesFail 
  | UpdateMovieRating 
  | UpdateMovieRatingSuccess 
  | UpdateMovieRatingFail
  | RandomMovieRating 
  | RandomMovieRatingSuccess 
  | RandomMovieRatingFail;
