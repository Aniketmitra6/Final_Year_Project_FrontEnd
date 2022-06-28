import { Component, OnInit } from '@angular/core';
import { Recharge } from 'src/app/recharge';
import { RechargeService } from 'src/app/recharge.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public plandetails: Recharge[] = [];
  plansupdate:any={
   rechargeId:"",
   rechargeType: "",
   name: "",
   mobile:"",
   email:"",
   rechargePlan:"",
   rechargePrice:"",
   orderNumber:""
  }
  
 
   constructor(public plansservice: RechargeService) { }
   
 
   public getRecharge():void{
     this.plansservice.getRecharge().subscribe(
       (response: Recharge[]) => {
        this.plandetails=response;
       },
     );
   }
 
   public getRechargeByName(key: string):void{
     const result:Recharge[]=[];
     for(const pl of this.plandetails){
       if(pl.name.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
       pl.email.toLowerCase().indexOf(key.toLowerCase())!== -1 ||
       pl.mobile.toLowerCase().indexOf(key.toLowerCase())!== -1){
         result.push(pl);
       }
     }
     this.plandetails=result;
     if(result.length==0 || !key){
       this.getRecharge();
     }
   }
 
   displayStyle="none";
   openPopup(Addon:any) {
     this.displayStyle = "block";
     this.plansupdate=Addon;
   }
   close()
   {
     this.displayStyle = "none";
   }
   register()
   {
     this.plansservice.update(this.plansupdate).subscribe(data=>
       {
         console.log(data);
         
       })
   }
   delete(Addon:any)
   {
     this.plansservice.deleteByid(Addon.rechargeId).subscribe(
       (data)=>
       {
           console.log("Succesfully deleted");
           this.getRecharge();
       })
   }
 
   ngOnInit(): void {
     this.getRecharge();
   }
 
}
