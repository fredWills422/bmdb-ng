import { Component, OnInit } from '@angular/core';

import { Movie } from 'src/app/model/movie.class';
import { Actor } from 'src/app/model/actor.class';
import { Credit } from 'src/app/model/credit.class';

import { MovieService } from 'src/app/service/movie.service';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.css']
})
export class CreditCreateComponent implements OnInit {

  title: string = 'Credit-Create';
  submitBtnTitle: string ='Create';

  credit: Credit = new Credit();
  movies: Movie[]= [];
  actors: Actor[]= [];

  constructor(private creditSvc: CreditService,
              private movieSvc: MovieService,
              private actorSvc: ActorService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    //populate movies
    //populate actors
    this.movieSvc.list().subscribe(
      jr => {
        this.movies = jr.data as Movie[];
        console.log(this.movies);
      }
    );
    this.actorSvc.list().subscribe(
      jr => {
        this.actors = jr.data as Actor[];
        console.log(this.actors);
      }
    );
  }

  save(){
    this.creditSvc.create(this.credit).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating credit: "+errs);
      }
      this.router.navigateByUrl('/credit/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
