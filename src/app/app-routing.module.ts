import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonFormComponent } from './admin/addon-form/addon-form.component';
import { AddonsComponent } from './admin/addons/addons.component';

import { MonthlyplansComponent } from './admin/monthlyplans/monthlyplans.component';
import { PremiumplansComponent } from './admin/premiumplans/premiumplans.component';

import { MonthlyFormComponent } from './admin/monthly-form/monthly-form.component';
import { PremiumFormComponent } from './admin/premium-form/premium-form.component';
import { UseraddonsComponent } from './user/useraddons/useraddons.component';
import { UserperiumComponent } from './user/userperium/userperium.component';
import { UsermonthlyComponent } from './user/usermonthly/usermonthly.component';
import { RechargeComponent } from './user/recharge/recharge.component';
import { NotificationComponent } from './user/notification/notification.component';
import { ReviewComponent } from './user/review/review.component';
import { ReviewFormComponent } from './user/review-form/review-form.component';
import { DetailsComponent } from './user/details/details.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
      path:'',
      component:SignupComponent
    },
    {
      path:'login',
      component:LoginComponent
    },
    {
    path:'admin',
      children:[
     
      {
        path:'addon',
        component:AddonsComponent
      },
      {
        path:'premium',
        component:PremiumplansComponent
      },
      {
        path:'monthly',
        component:MonthlyplansComponent
      },
      {
        path:'addform',
        component:AddonFormComponent
      },
      {
        path:'premiumform',
        component:PremiumFormComponent
      },
      {
        path:'monthlyform',
        component:MonthlyFormComponent
      }]
    },
  
    {
    path:'user',
      children:[
      {
        path:'useraddon',
        component:UseraddonsComponent
      },
      {
        path:'userpremium',
        component:UserperiumComponent
      },
      {
        path:'usermonthly',
        component:UsermonthlyComponent
      },
      {
        path:'recharge',
        component:RechargeComponent
      },
      {
        path:'notify',
        component:NotificationComponent
      },

      {
        path:'review',
        component:ReviewComponent
      },

      {
        path:'addReview',
        component:ReviewFormComponent
      },
      {
        path:'detail',
        component:DetailsComponent
      }
    ],
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
