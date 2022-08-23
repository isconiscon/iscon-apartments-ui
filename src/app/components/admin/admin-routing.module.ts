import { AdminhomeComponent } from './adminmain/adminhome/adminhome.component';
import { AdminComponent } from './admin.component';
import { AdminallusersComponent } from './adminmain/adminallusers/adminallusers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      { path: '', outlet: 'admin', component: AdminhomeComponent },
      { path: 'dashboard', outlet: 'admin', component: AdminhomeComponent },
      { path: 'allusers', outlet: 'admin', component: AdminallusersComponent },
    ],
  },
  // {
  //   path: 'allusers',
  //   component: AdminallusersComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
