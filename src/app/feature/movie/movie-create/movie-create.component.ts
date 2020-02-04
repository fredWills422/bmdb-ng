import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-create',
  templateUrl: '../movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  title: string = 'Movie-Create';
  submitBtnTitle: string ='Create';
  movie: Movie = new Movie();
  constructor(private movieSvc: MovieService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    //do nothing (no need to initialize this page)
  }

  save(){
    this.movieSvc.create(this.movie).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating movie: "+errs);
      }
      this.router.navigateByUrl('/movie/list');
    });
  }

  backClicked(){
    this.location.back();
  }
  
}
