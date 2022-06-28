import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monthly } from '../../monthly';
import { MonthlyService } from '../../monthly.service';
@Component({
  selector: 'app-monthly-form',
  templateUrl: './monthly-form.component.html',
  styleUrls: ['./monthly-form.component.css']
})
export class MonthlyFormComponent implements OnInit {

  plan: Monthly=new Monthly();
  constructor(private service:MonthlyService,private router:Router) { }


  ngOnInit(): void {
  }
  addonRegister()
  {
    console.log(this.plan);
    this.savemonthlyplan();
  }
  savemonthlyplan()
  {
    this.service.planlist(this.plan).subscribe(data=>
      {
          console.log(data);
          this.goToMonthly();
      })
  }
  goToMonthly()
  {
    this.router.navigate(['/admin/monthly']);
  }

}
