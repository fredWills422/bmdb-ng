import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {

  actors: Actor[];
  title: string = 'Actor-List'

  constructor(private actorSvc: ActorService) { }

  ngOnInit() {
    //populate Actors
    this.actorSvc.list().subscribe(
      jr => {
        this.actors = jr.data as Actor[];
        console.log(this.actors);
      }
    );
  }

}
