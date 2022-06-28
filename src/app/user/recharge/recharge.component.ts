import { Component, NgModule, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { AddonService } from 'src/app/addon.service';
import { Addons } from 'src/app/addons';
import { Recharge } from 'src/app/recharge';
import { RechargeService } from 'src/app/recharge.service';
import { NgForm } from '@angular/forms';
import { Monthly } from 'src/app/monthly';
import { MonthlyService } from 'src/app/monthly.service';
import { filter, pairwise } from 'rxjs/operators';

import { Event } from '@angular/router';


@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  
  recharge:Recharge=new Recharge();
  
  month:Monthly[];
  public price=0;
  previousUrl: string;
  currentUrl: string;

  constructor(private service:RechargeService,private route:Router,private mservice:MonthlyService) { 
    
  }
  
  ngOnInit(): void {
    this.getpremium();
  }
    
  getpremium()
  {
    this.service.FetchAddonFormFromRemote().subscribe(data=>
      {
          this.month=data;
          const orderdetail = this.month;
          let previous = this.mservice.getPreviousUrl();
        if (orderdetail.length > 0 && previous.includes('usermonthly')) {
          this.price = orderdetail[0].planPrice;
        }
      });
  }
  recharges()
  {
    console.log(this.recharge);
    this.saveRecharge();
  }
  getRandomNumber()
  {
    var da = (Math.floor((Math.random() * 100) + 1));
    return da.toString();
  }
  saveRecharge()
  {
    this.recharge.orderNumber=this.getRandomNumber();
    this.service.addRecharge(this.recharge).subscribe(data=>
      {
          console.log(data);
          this.goToNotify();
      })
  }
  goToNotify()
  {
    this.route.navigate(['/user/notify']);
  }
}
