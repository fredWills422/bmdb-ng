import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.css']
})
export class ActorDetailComponent implements OnInit {

  title: string = 'actor-Detail';
  actor: Actor;
  id: number;

  constructor(private actorSvc: ActorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get actor id from the url call service to populate actor property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.actorSvc.get(this.id).subscribe(jr => {
      this.actor = jr.data as Actor});

      
  }

  delete() {
    this.actorSvc.delete(this.id).subscribe(jr => {
      console.log("actor delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting actor: "+jr.errors);
      }
      this.router.navigateByUrl("actor/list");
    });
  }

}
