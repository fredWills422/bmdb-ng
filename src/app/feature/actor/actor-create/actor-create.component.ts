import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-create',
  templateUrl: '../actor-maint-shared/actor-maint.component.html',
  styleUrls: ['./actor-create.component.css']
})
export class ActorCreateComponent implements OnInit {
  title: string = 'Actor-Create';
  submitBtnTitle: string ='Create';
  actor: Actor = new Actor();
  constructor(private actorSvc: ActorService,
              private router: Router) { }

  ngOnInit() {
    //do nothing (no need to initialize this page)
  }

  save(){
    this.actorSvc.create(this.actor).subscribe(jr => {
      let errs: string = jr.errors;
      if (errs!=null){
        console.log("Error creating actor: "+errs);
      }
      this.router.navigateByUrl('/actor/list');
    });
  }

}
