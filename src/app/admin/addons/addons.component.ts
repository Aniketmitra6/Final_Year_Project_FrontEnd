import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddonService } from 'src/app/addon.service';
import { Addons } from 'src/app/addons';

@Component({
  selector: 'app-addons',
  templateUrl: './addons.component.html',
  styleUrls: ['./addons.component.css']
})
export class AddonsComponent implements OnInit {
  
  addons:Addons[];
  addon=new Addons();
  addonupdate:any ={
    addonId:"",
    addonName:"",
    addonType:"",
    addonPrice:"",
    addonDetails:"",
    addonValidity:""
}
  
  constructor(private service:AddonService,private router:Router) { }

  ngOnInit(): void {
    this.Listaddon();
  }
  Listaddon()
  {
    this.service.FetchAddonFormFromRemote().subscribe((data)=>
      {
        console.log("Response received");
        this.addons=data;
      });
  }
  delete(Addon:any)
  {
    this.service.deleteByid(Addon.addonId).subscribe(
      (data)=>
      {
          console.log("Succesfully deleted");
          this.Listaddon();
      })
  }
  displayStyle = "none";
  
  openPopup(Addon:any) {
    this.displayStyle = "block";
    this.addonupdate=Addon;
  }
  close()
  {
    this.displayStyle = "none";
  }
  register()
  {
    this.service.update(this.addonupdate).subscribe(data=>
      {
        console.log(data);
        
      })
  }

}