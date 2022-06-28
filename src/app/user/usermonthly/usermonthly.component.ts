import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monthly } from 'src/app/monthly';
import { MonthlyService } from 'src/app/monthly.service';

@Component({
  selector: 'app-usermonthly',
  templateUrl: './usermonthly.component.html',
  styleUrls: ['./usermonthly.component.css']
})
export class UsermonthlyComponent implements OnInit {

  month:Monthly[];

  constructor(private service:MonthlyService,private _router: Router) {
   }
  ngOnInit(): void {
  this.getpremium();
  }
  getpremium()
  {
    this.service.FetchAddonFormFromRemote().subscribe(data=>
      {
          this.month=data;
      });
  }
}
