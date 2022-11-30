import { Component, Input, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  // @Input() animationType = CarouselAnimation.Fade;

  public movies: any = [];
  currentMovie = 0;

  constructor(private imdb: ImdbService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.imdb.getData().subscribe((data: any) => {
      data.forEach((item: any) => {
        this.movies.push(item);
        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
      });
      /*       this.movies.forEach((movie: any) => {
        this.imdb.getPosters(movie.id).subscribe((data) => {
          console.log(data);
          movie.image = data.posters[0].link;
          this.imdb.putPosters(movie.id, movie);
          return;
        });
      });

      console.log(this.movies); */
    });
  }

  onPreviousClick() {
    const previous = this.currentMovie - 1;
    this.currentMovie = previous < 0 ? this.movies.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentMovie + 1;
    this.currentMovie = next === this.movies.length ? 0 : next;
  }
}
