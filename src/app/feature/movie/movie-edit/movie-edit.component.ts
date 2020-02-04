import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: '..//movie-maint-shared/movie-maint.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  title: string = 'Movie-Edit';
  submitBtnTitle: string ='Save';
  movie: Movie = new Movie();
  id: number = 0;
  constructor(private movieSvc: MovieService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    //get movie id from the url call service to populate movie property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.movieSvc.get(this.id).subscribe(jr => {
      this.movie = jr.data as Movie});
  }

  save(){
    this.movieSvc.edit(this.movie).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error editing movie: "+errs);
      }
      this.router.navigateByUrl('/movie/list');
    });
  }

  backClicked(){
    this.location.back();
  }


}
