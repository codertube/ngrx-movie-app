import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from "rxjs";

import { Movie } from '../models/movie.model';
import { MovieState } from '../store/reducers/movie.reducer';
import { LoadMovies } from '../store/actions/movie.actions';
import * as fromMovie from '../store/actions/movie.actions';
import { getMoviesLoading, getAllMovies, getMoviesError, getMovieById } from '../store/selectors/movie.selectors';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'movie-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  movies$: Observable<Movie[]>;
  error$: Observable<any>;
  loading$: Observable<any>;
  isRandomRateClicked: boolean = false;
  movieCount: number = 0;
  selectedMovie: Movie;
  isMovieRated = false;

  constructor(private store: Store<MovieState>, private movieService: MovieService) { }

  ngOnInit() {
    this.store.dispatch(new LoadMovies());
    this.loading$ = this.store.pipe(select(getMoviesLoading));
    this.movies$ = this.store.pipe(select(getAllMovies));
    this.error$ = this.store.pipe(select(getMoviesError));
  }

  ratingComponentClick(selectedMovie: any): void {
    this.store.dispatch(new fromMovie.UpdateMovieRating(selectedMovie));
  }

  randomRating() {
    this.isRandomRateClicked = !this.isRandomRateClicked;
    this.store.select(getAllMovies).subscribe(movies => {
      this.movieCount = movies.length;
    });
    setInterval(function () {
      this.isMovieRated = false;
      if (this.isRandomRateClicked) {
        this.store.select(getMovieById(Math.floor(Math.random() * this.movieCount) + 1)).subscribe((movie) => {
          if (!this.isMovieRated) {
            this.selectedMovie = movie;
            this.selectedMovie.rating = Math.floor(Math.random() * 5) + 1;
            this.isMovieRated = true;
          }
        });
        this.store.dispatch(new fromMovie.RandomMovieRating(this.selectedMovie));
      }
    }.bind(this), 3000);
  }

}
