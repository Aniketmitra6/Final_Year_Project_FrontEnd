import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from 'src/app/plan';
import { PlanService } from 'src/app/plan.service';

@Component({
  selector: 'app-premiumplans',
  templateUrl: './premiumplans.component.html',
  styleUrls: ['./premiumplans.component.css']
})
export class PremiumplansComponent implements OnInit {

  pla:Plan[];
  plans=new Plan();
  planupdate:any ={
    planId:"",
    planName:"",
    planType:"",
    planPrice:"",
    planDetails:""
}
  
  constructor(private service:PlanService,private router:Router) { }

  ngOnInit(): void {
    this.Listplan();
  }
  Listplan()
  {
    this.service.FetchAddonFormFromRemote().subscribe((data)=>
      {
        console.log("Response received");
        this.pla=data;
      });
  }
  delete(Plans:any)
  {
    this.service.deleteByid(Plans.planId).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.Listplan();
      })
  }
  displayStyle = "none";
  
  openPopup(Plans:any) {
    this.displayStyle = "block";
    this.planupdate=Plans;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.service.update(this.planupdate).subscribe(data=>
      {
        console.log(data);
        
      })
  }


}
