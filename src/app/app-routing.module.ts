import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { DistrictListComponent } from './dashboard/district-list/district-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'dashboard/:state',
    component: DistrictListComponent,
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'latest-news', component: NewsComponent, pathMatch: 'full' },
  { path: 'precautions', component: PrecautionComponent, pathMatch: 'full' },
  { path: 'admin/add-news', component: AddNewsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
