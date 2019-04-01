import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'menup', loadChildren: './menup/menup.module#MenupPageModule' },
  { path: 'caixa', loadChildren: './caixa/caixa.module#CaixaPageModule' },
  { path: 'vd', loadChildren: './vd/vd.module#VdPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'config', loadChildren: './config/config.module#ConfigPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
