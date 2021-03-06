import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-credit-detail',
  templateUrl: './credit-detail.component.html',
  styleUrls: ['./credit-detail.component.css']
})
export class CreditDetailComponent implements OnInit {

  title: string = 'Credit-Detail';
  credit: Credit;
  id: number;

  constructor(private creditSvc: CreditService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    //get credit id from the url call service to populate credit property
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.creditSvc.get(this.id).subscribe(jr => {
      this.credit = jr.data as Credit});

      
  }

  delete() {
    this.creditSvc.delete(this.id).subscribe(jr => {
      console.log("credit delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting credit: "+jr.errors);
      }
      this.router.navigateByUrl("credit/list");
    });
  }
}
