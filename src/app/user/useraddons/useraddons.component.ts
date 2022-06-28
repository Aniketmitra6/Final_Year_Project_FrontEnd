import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddonService } from 'src/app/addon.service';
import { Addons } from 'src/app/addons';

@Component({
  selector: 'app-useraddons',
  templateUrl: './useraddons.component.html',
  styleUrls: ['./useraddons.component.css']
})
export class UseraddonsComponent implements OnInit {

  addons:Addons[];

  constructor(private service:AddonService) { }

  ngOnInit(): void {
   
  
  this.getaddon();
  }
  getaddon()
  {
    this.service.FetchAddonFormFromRemote().subscribe(data=>
      {
          this.addons=data;
      });
  }
 

  
  
}
