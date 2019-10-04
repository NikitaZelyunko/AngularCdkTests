import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkTableComponent } from './cdkTable/cdk-table.component';

const routes: Routes = [
  {
    path: '',
    component: CdkTableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
