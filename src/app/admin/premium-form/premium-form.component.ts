import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/plan';
import { PlanService } from '../../plan.service';

@Component({
  selector: 'app-premium-form',
  templateUrl: './premium-form.component.html',
  styleUrls: ['./premium-form.component.css']
})
export class PremiumFormComponent implements OnInit {
  
  plan: Plan=new Plan();
  constructor(private service:PlanService,private router:Router) { }


  ngOnInit(): void {
  }
  addonRegister()
  {
    console.log(this.plan);
    this.savepremiumplan();
  }
  savepremiumplan()
  {
    this.service.planlist(this.plan).subscribe(data=>
      {
          console.log(data);
          this.goToPremium();
      })
  }
  goToPremium()
  {
    this.router.navigate(['/admin/premium']);
  }

}
