import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieState } from '../reducers/movie.reducer';

export const getMovieState = createFeatureSelector<MovieState>('movies');

export const getMoviesLoading = createSelector(
    getMovieState,
    state => state.loading
);

export const getAllMovies = createSelector(
    getMovieState,
    state => state.movies
);

export const getMovieById = (id) => createSelector(getAllMovies, (movies) => {
    if (movies) {
        return movies.find(movie => {
            return movie.id === id;
        });
    } else {
        return null;
    }
});

export const getMoviesError = createSelector(
    getMovieState,
    state => state.error
);

export const getSelectedMovie = createSelector(
    getMovieState,
    state => state.selectedMovie
);
