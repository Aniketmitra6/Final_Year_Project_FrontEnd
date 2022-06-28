import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addons } from './addons';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

 
  constructor(private http:HttpClient) { }

  
  addonlist(addon:Addons):Observable<any>
  {
    return this.http.post<any>("http://localhost:8083/saveaddon",addon);
  }
  FetchAddonFormFromRemote():Observable<Addons[]>
  {
    return this.http.get<Addons[]>("http://localhost:8083/getaddon");
  }
  deleteByid(addonId:number)
  {
      return this.http.delete("http://localhost:8083/deleteaddon?addonId="+addonId);
  }
  update(addon:Addons)
  {
    return this.http.put("http://localhost:8083/updateaddon",addon);
  }
}
