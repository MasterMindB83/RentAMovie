import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Object;
  name: string;
  genre: string;
  year: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.refreshData();
  }
  refreshData() {
    let name: string;
    let genre: string;
    let year: string;
    if (this.name === undefined || this.name === '') {
      name = '-1';
    } else {
      name = this.name;
    }
    if (this.genre === undefined || this.genre === '') {
      genre = '-1';
    } else {
      genre = this.genre;
    }
    if (this.year === undefined || this.year === '') {
      year = '-1';
    } else {
      year = this.year;
    }
    this.data.getMovies(name, genre, year).subscribe((data) => this.movies = data);
  }
  deleteMovie(id1) {
    if (confirm('Are you sure you want to delete movie: ' + id1)) {
      this.data.deleteMovie(id1).subscribe((data) => console.log('Movie deleted.'));
      alert('Movie deleted.');
      this.refreshData();
    }
  }
}
