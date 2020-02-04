import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-actor-edit',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-edit.component.css']
})
export class ActorEditComponent implements OnInit {

  title: string = 'Actor-Edit';
  submitBtnTitle: string ='Save';
  actor: Actor = new Actor();
  id: number = 0;
  constructor(private actorSvc: ActorService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    //get actor id from the url call service to populate actor property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.actorSvc.get(this.id).subscribe(jr => {
      this.actor = jr.data as Actor});
  }

  save(){
    this.actorSvc.edit(this.actor).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error editing actor: "+errs);
      }
      this.router.navigateByUrl('/actor/list');
    });
  }

  backClicked(){
    this.location.back();
  }

}
