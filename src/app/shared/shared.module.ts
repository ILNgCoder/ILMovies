import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RollerComponent } from './roller/roller.component';
import { ErrorComponent } from './error/error.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CustomMaterialModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    RollerComponent,
    ErrorComponent,
    SafePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CustomMaterialModule,
    HeaderComponent,
    FooterComponent,
    RollerComponent,
    SafePipe
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class SharedModule { }
