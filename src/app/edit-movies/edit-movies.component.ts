import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';
import { IMovie } from '../interfaces';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {

  id: number;
  name: string;
  genre: string;
  year: string;
  description: string;
  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data.getMovie(this.route.snapshot.paramMap.get('id')).subscribe((data: IMovie[]) => {
      this.id = data[0].id;
      this.name = data[0].name;
      this.genre = data[0].genre;
      this.year = data[0].year.toString();
      this.description = data[0].description;
    });
  }
  save() {
    this.data.updateMovie(this.id, this.name, this.genre, this.year, this.description).subscribe((data) => console.log('Movie aupdated.'));
    alert('Movie updated.');
  }
  delete() {
  }
}
