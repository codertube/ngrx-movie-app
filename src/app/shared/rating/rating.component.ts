import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
    @Input() rating: number;
    @Input() movie: Movie;
    @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
    inputName: string;

    ngOnInit() {
        if (this.movie && this.movie.id) {
            this.inputName = this.movie.id + '_rating';
        }
    }

    onClick(rating: number): void {
        let emitData: any = {
            id: this.movie.id,
            name: this.movie.name,
            rating: rating,
            language: this.movie.language
        };
        this.ratingClick.emit(emitData);
    }
}