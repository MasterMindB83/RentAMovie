import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddUserComponent } from './add-user/add-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
import { RentComponent } from './rent/rent.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MoviesComponent,
    UsersComponent,
    AddMovieComponent,
    AddUserComponent,
    EditMoviesComponent,
    RentComponent,
    EditUserComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
