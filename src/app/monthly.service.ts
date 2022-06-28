import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monthly } from './monthly';
import { filter, pairwise } from 'rxjs/operators';

import { Event, NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {
  previousUrl: string;
  currentUrl: string;
  constructor(private http:HttpClient,private route:Router) { 
    this.currentUrl = this.route.url;
    route.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }
  getPreviousUrl(){
    return this.previousUrl;
  }  
  planlist(month:Monthly):Observable<any>
  {
    return this.http.post<any>("http://localhost:8083/savemonthly",month);
  }
  FetchAddonFormFromRemote():Observable<Monthly[]>
  {
    return this.http.get<Monthly[]>("http://localhost:8083/getmonthly");
  }
  deleteByid(planId:number)
  {
      return this.http.delete("http://localhost:8083/deletemonthly?PlanId="+planId);
  }
  update(month:Monthly)
  {
    return this.http.put("http://localhost:8083/updatemonthly",month);
  }
}
