import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  name: string;
  genre: string;
  year: string;
  description: string;
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  save() {
    this.data.addMovie(this.name, this.genre, this.year,  this.description).subscribe((data) => console.log('Movie added.'));
    alert('Movie added.');
  }
}
