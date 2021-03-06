import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MenuComponent } from './core/menu/menu.component';

import { MovieCreateComponent } from './feature/movie/movie-create/movie-create.component';
import { MovieDetailComponent } from './feature/movie/movie-detail/movie-detail.component';
import { MovieEditComponent } from './feature/movie/movie-edit/movie-edit.component';
import { MovieListComponent } from './feature/movie/movie-list/movie-list.component';


import { ActorCreateComponent } from './feature/actor/actor-create/actor-create.component';
import { ActorDetailComponent } from './feature/actor/actor-detail/actor-detail.component';
import { ActorEditComponent } from './feature/actor/actor-edit/actor-edit.component';
import { ActorListComponent } from './feature/actor/actor-list/actor-list.component';

import { CreditListComponent } from './feature/credit/credit-list/credit-list.component';
import { CreditCreateComponent } from './feature/credit/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit/credit-edit/credit-edit.component';
import { CreditDetailComponent } from './feature/credit/credit-detail/credit-detail.component';
import { SortPipe } from './pipe/sort.pipe';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    MovieListComponent,
    MovieCreateComponent,
    MovieDetailComponent,
    MovieEditComponent,
    
    ActorCreateComponent,
    ActorDetailComponent,
    ActorEditComponent,
    ActorListComponent,
    
    CreditListComponent,
    CreditCreateComponent,
    CreditEditComponent,
    CreditDetailComponent,
    SortPipe,
    BaseComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
