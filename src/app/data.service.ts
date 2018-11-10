import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMovies(name, genre, year) {
      return this.http.get('http://localhost:3000/movies/' + name + '/' + genre + '/' + year);
  }
  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }
  getUser(id) {
    return this.http.get('http://localhost:3000/users/' + id);
  }
  getMovie(id) {
    return this.http.get('http://localhost:3000/movies/' + id);
  }
  updateMovie(id1: number, name1: string, genre1: string, year1: string, description1: string) {
    return this.http.post('http://localhost:3000/updatemovie',
    {id: id1, name: name1.replace(`'`, `''`), genre: genre1.replace(`'`, `''`), year: year1, description: description1.replace(`'`, `''`)});
  }
  addMovie(name1: string, genre1: string, year1: string, description1: string) {
    return this.http.post('http://localhost:3000/addmovie',
    {name: name1.replace(`'`, `''`), genre: genre1.replace(`'`, `''`), year: year1, description: description1.replace(`'`, `''`)});
  }
  rentMovie(id1: number, rented_by1: string) {
    return this.http.post('http://localhost:3000/rentmovie', {id: id1, rented_by: rented_by1});
  }
  returnMovie(id1: number) {
    return this.http.post('http://localhost:3000/returnmovie', {id: id1});
  }
  getPrice() {
    return this.http.get('http://localhost:3000/price');
  }
  updateUser(id1, username1, name1) {
    return this.http.post('http://localhost:3000/updateuser', {id: id1, username: username1, name: name1});
  }
  deleteUser(id1) {
    return this.http.delete('http://localhost:3000/deleteuser/' + id1);
  }
  addUser(username1, name1) {
    return this.http.post('http://localhost:3000/adduser', {username: username1, name: name1});
  }
  deleteMovie(id1) {
    return this.http.delete('http://localhost:3000/deletemovie/' + id1);
  }
  updatePrice(price1, valute1) {
    return this.http.post('http://localhost:3000/updateprice', {price: price1, valute: valute1});
  }
}
