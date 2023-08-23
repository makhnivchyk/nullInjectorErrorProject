import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerLayoutComponent} from "./components";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ng/eop',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContainerLayoutComponent,
    children: [
      {
        path: 'ng/eop',
        loadChildren: () =>
          import('./modules/eop/eop.module').then((m) => m.EopModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
