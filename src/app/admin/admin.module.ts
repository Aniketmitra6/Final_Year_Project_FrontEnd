import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PremiumplansComponent } from './premiumplans/premiumplans.component';
import { MonthlyplansComponent } from './monthlyplans/monthlyplans.component';
import { AddonsComponent } from './addons/addons.component';
import { AddonFormComponent } from './addon-form/addon-form.component';



@NgModule({
  declarations: [
    PremiumplansComponent,
    MonthlyplansComponent,
    AddonsComponent,
    AddonFormComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class AdminModule { }
