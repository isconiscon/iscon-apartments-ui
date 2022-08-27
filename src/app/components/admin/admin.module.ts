import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminheaderComponent } from '../../components/admin/adminheader/adminheader.component';
import { AdminsidenavComponent } from '../../components/admin/adminsidenav/adminsidenav.component';
import { AdminhomeComponent } from '../../components/admin/adminmain/adminhome/adminhome.component';
import { AdminallusersComponent } from '../../components/admin/adminmain/adminallusers/adminallusers.component';
import { AdminuserdetailsComponent } from '../../components/admin/adminmain/adminuserdetails/adminuserdetails.component';
import { AdminComponent } from './admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../auth/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';

@NgModule({
  declarations: [
    AdminheaderComponent,
    AdminsidenavComponent,
    AdminhomeComponent,
    AdminallusersComponent,
    AdminuserdetailsComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PrimengModule,
    AdminRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AdminModule {}
