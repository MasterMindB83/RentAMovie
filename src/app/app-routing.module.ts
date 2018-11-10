import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {MoviesComponent} from './movies/movies.component';
import {AddMovieComponent} from './add-movie/add-movie.component';
import {EditMoviesComponent} from './edit-movies/edit-movies.component';
import {RentComponent} from './rent/rent.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'users',
    component: UsersComponent},
  {
    path: 'adduser',
    component:  AddUserComponent
  },
  {
    path: 'addmovie',
    component: AddMovieComponent
  },
  {
    path: 'editmovie/:id',
    component: EditMoviesComponent
  },
  {
    path: 'rentmovie/:id',
    component: RentComponent
  },
  {
    path: 'edituser/:id',
    component: EditUserComponent
  },
  {
    path: 'price',
    component: PriceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
