import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddonService } from 'src/app/addon.service';
import { Addons } from 'src/app/addons';

@Component({
  selector: 'app-addon-form',
  templateUrl: './addon-form.component.html',
  styleUrls: ['./addon-form.component.css']
})
export class AddonFormComponent implements OnInit {
  addon: Addons=new Addons();
  constructor(private service:AddonService,private router:Router) { }

  ngOnInit(): void {
  }
  addonRegister()
  {
    this.saveaddon();

  }
  saveaddon()
  {
    this.service.addonlist(this.addon).subscribe(data=>
      {
          
          this.goToaddon();
      })
  }
  goToaddon()
  {
    this.router.navigate(['/admin/addon']);
    
  }

}
