import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseraddonsComponent } from './useraddons/useraddons.component';
import { UserperiumComponent } from './userperium/userperium.component';
import { UsermonthlyComponent } from './usermonthly/usermonthly.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RechargeComponent } from './recharge/recharge.component';
import { NotificationComponent } from './notification/notification.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { DetailsComponent } from './details/details.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';


@NgModule({
  declarations: [
  
    UseraddonsComponent,
       UserperiumComponent,
       UsermonthlyComponent,
       RechargeComponent,
       NotificationComponent,
       ReviewComponent,
       ReviewFormComponent,
       DetailsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    GooglePayButtonModule
  ]
})
export class UserModule { }
