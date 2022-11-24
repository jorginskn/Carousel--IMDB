import { Component, OnInit } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  movies: any = []
  constructor(private imdbService: ImdbService) { }

  ngOnInit() {
    this.getMovies()
  }

  getMovies() {
    this.imdbService.getData().subscribe((data) => {
      data.forEach(item => {
        console.log('items', item)
        this.movies.push(item)
        this.movies.push
        console.log('this.movies', this.movies)
        while (this.movies.length > 10) {
          this.movies.pop()
        }
        return;
      });
      // this.movies.forEach((movie: any) => {
      //   this.imdbService.getPosters(movie.id).subscribe((data) => {
      //     // console.log('data', data)
      //     movie.image = data.posters[0].link;
      //     this.imdbService.putPosters(movie.id, movie);
      //     return;
      //   });
      // });
    });
    console.log('image', this.movies)
  }
}
