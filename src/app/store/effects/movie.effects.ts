import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MovieService } from '../../shared/movie.service';
import { MovieActionTypes, LoadMovies, LoadMoviesSuccess, LoadMoviesFail } from '../actions/movie.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MovieEffects {

  constructor(private actions$: Actions, private service: MovieService) { }

  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(MovieActionTypes.LoadMovies),
    switchMap(() => this.service.getAllMovies().pipe(
      map(movies => new LoadMoviesSuccess(movies)),
      catchError(err => of(new LoadMoviesFail(err)))
    ))
  );

}
