import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie.model';
import { MovieActionTypes, MovieActions } from '../actions/movie.actions'
import { HttpErrorResponse } from '@angular/common/http';

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: HttpErrorResponse;
  selectedMovie: Movie;
}

export const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
  selectedMovie: null
};

export function movieReducer(state = initialState, action: MovieActions): MovieState {
  const sortByKey = key => (a, b) => a[key] < b[key] ? 1 : -1;
  switch (action.type) {

    case MovieActionTypes.LoadMovies: {
      return {
        ...state,
        loading: true
      };
    }

    case MovieActionTypes.LoadMoviesSuccess: {
      return {
        ...state,
        loading: false,
        movies: action.payload.sort(sortByKey('rating')),
        error: null
      };
    }

    case MovieActionTypes.LoadMoviesFail: {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }

    case MovieActionTypes.UpdateMovieRating: {
      let index = state.movies.map(movie => movie.id).indexOf(action.payload.id);
      const movieObj: Movie = <Movie>{
        ...action.payload,
      };
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, index),
          movieObj,
          ...state.movies.slice(index + 1)
        ].sort(sortByKey('rating'))
      };
    }

    case MovieActionTypes.RandomMovieRating: {
      let index = state.movies.map(movie => movie.id).indexOf(action.payload.id);
      const movieObj: Movie = <Movie>{
        ...action.payload,
      };
      return {
        ...state,
        movies: [
          ...state.movies.slice(0, index),
          movieObj,
          ...state.movies.slice(index + 1)
        ].sort(sortByKey('rating'))
      };
    }

    default:
      return state;
  }
}
