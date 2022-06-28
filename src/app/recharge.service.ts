import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Monthly } from './monthly';
import { Recharge } from './recharge';

@Injectable({
  providedIn: 'root'
})
export class RechargeService {
  Url="http://localhost:8083";
  constructor(private http:HttpClient) { }
  public getRecharge(): Observable<Recharge[]> {
    return this.http.get<Recharge[]> ("http://localhost:8083/getRecharge");
  }
  FetchAddonFormFromRemote():Observable<Monthly[]>
  {
    return this.http.get<Monthly[]>("http://localhost:8083/getmonthly");
  }

  public addRecharge(data:Recharge): Observable<Recharge> {
    return this.http.post<Recharge>("http://localhost:8083/addRecharge",data);
  }

  update(data:Recharge)
  {
    return this.http.put("http://localhost:8083/update",data);
  }
  deleteByid(rechargeId:number)
  {
      return this.http.delete(`${this.Url}/delete/${rechargeId}`);
  }
}
