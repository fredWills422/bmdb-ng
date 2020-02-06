import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { BaseComponent } from 'src/app/base/base.component';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent extends BaseComponent implements OnInit {

  actors: Actor[];
  title: string = 'Actor-List'

  constructor(private actorSvc: ActorService) {
    super();
  }

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
