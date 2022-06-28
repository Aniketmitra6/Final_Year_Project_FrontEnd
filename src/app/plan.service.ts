import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from './plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  
  constructor(private http:HttpClient) { }

  planlist(plan:Plan):Observable<any>
  {
    return this.http.post<any>("http://localhost:8083/savepremium",plan);
  }
  FetchAddonFormFromRemote():Observable<Plan[]>
  {
    return this.http.get<Plan[]>("http://localhost:8083/getpremium");
  }
  deleteByid(planId:number)
  {
      return this.http.delete("http://localhost:8083/deletepremium?PlanId="+planId);
  }
  update(plan:Plan)
  {
    return this.http.put("http://localhost:8083/updatepremium",plan);
  }
}

