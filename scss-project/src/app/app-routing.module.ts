import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren: () => import('src/app/features/scss/scss.module').then(
    module => module.ScssModule)
  },
  {
    path:'testing', loadChildren: () => import('src/app/features/testing/testing.module').then(
    module => module.TestingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
