import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponentComponent } from './update/reset-password-component/reset-password-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirect to AboutComponent by default
  { path: 'about', component: AboutComponent },
  {path : 'check-cibil',component:CheckCibilComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path:'forget-password',component:ResetPasswordComponentComponent},
  { path : '**' ,redirectTo: '/', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
