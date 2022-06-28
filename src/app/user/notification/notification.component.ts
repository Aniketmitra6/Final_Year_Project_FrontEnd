import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recharge } from 'src/app/recharge';
import { RechargeService } from 'src/app/recharge.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
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
  public rate = 0;
  public orderplan = '';
  
  RandomOrderNumber=this.getRandomOrderNumber();
  
  
   constructor(public plansservice: RechargeService,private http:HttpClient) {   }
  
   
   getRandomOrderNumber()
  {
    var da = (Math.floor((Math.random() * 10000) + 1));
    return da.toString();
  }

  public getRecharge():void{
    this.plansservice.getRecharge().subscribe(
      (response: Recharge[]) => {
       this.plandetails=response;
       const orderdetail = this.plandetails;
        if (orderdetail.length > 0) {
          this.rate = orderdetail[orderdetail.length-1].rechargePrice;
          this.orderplan = orderdetail[orderdetail.length-1].rechargeType;
        }
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
 
  title="AngularGooglePay";
  buttonColor="black";
  buttonType="buy";
  isCustomSize=250;
  buttonHeight=50;
  
  paymentRequest = {
    apiVersion:2,
    apiVersionMinor:0,
    allowedPaymentMethods:[
      {type:"CARD",
      parameters:{
        allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
        allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
      },
      tokenizationSpecification:{
        type:"PAYMENT_GATEWAY",
        parameters:{
          gateway:"example",
          gatewayMerchantI:"exampleGatewayMerchantId"
        }
      }
    }
      
    ],
    merchantInfo:{
      merchantId:"1234567890543321",
      merchantName:"demo Merchant"
    },
    transactionInfo:{
      totalPriceStatus:"FINAL",
      totalPriceLabel:"TOTAL",
      totalPrice:"100",
      currencyCode:"USD",
      countryCode:"US"
    }
  };
  onLoadPaymentData(event:any): void{
    console.log("Load Payment Data by GPAY",event.detail)
  }

  ngOnInit(): void {
    this.getRecharge();
  }

}
