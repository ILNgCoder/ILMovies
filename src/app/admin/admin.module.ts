import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CustomMaterialModule
  ]
})
export class AdminModule { }
