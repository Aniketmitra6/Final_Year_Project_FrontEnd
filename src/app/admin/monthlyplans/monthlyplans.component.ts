import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monthly } from 'src/app/monthly';
import { MonthlyService } from 'src/app/monthly.service';

@Component({
  selector: 'app-monthlyplans',
  templateUrl: './monthlyplans.component.html',
  styleUrls: ['./monthlyplans.component.css']
})
export class MonthlyplansComponent implements OnInit {
  mon:Monthly[];
  plans=new Monthly();
  monthlyupdate:any ={
    planId:"",
    planName:"",
    planType:"",
    planPrice:"",
    planDetails:""
}
  
  constructor(private service:MonthlyService,private router:Router) { }

  ngOnInit(): void {
    this.Listplan();
  }
  Listplan()
  {
    this.service.FetchAddonFormFromRemote().subscribe((data)=>
      {
        console.log("Response received");
        this.mon=data;
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
    this.monthlyupdate=Plans;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.service.update(this.monthlyupdate).subscribe(data=>
      {
        console.log(data);
        
      })
  }


}

