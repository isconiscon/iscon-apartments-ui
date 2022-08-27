import { IndexhomeComponent } from './components/common/indexhome/indexhome.component';
import { HomeComponent } from './components/frontend/home/home.component';
import { NotfoundComponent } from './components/common/notfound/notfound.component';
import { LoginComponent } from './components/common/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexhomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(`./components/admin/admin.module`).then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
