import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/plan';
import { PlanService } from 'src/app/plan.service';

@Component({
  selector: 'app-userperium',
  templateUrl: './userperium.component.html',
  styleUrls: ['./userperium.component.css']
})
export class UserperiumComponent implements OnInit {

  plan:Plan[];


  constructor(private service:PlanService) { }

  ngOnInit(): void {
   
  this.getpremium();
  }
  getpremium()
  {
    this.service.FetchAddonFormFromRemote().subscribe(data=>
      {
          this.plan=data;
      });
  }
 
 

}
