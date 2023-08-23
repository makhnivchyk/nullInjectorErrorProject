import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BatchesPageComponent} from './pages';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'batches',
    pathMatch: 'full',
  },
  {
    path: 'batches',
    component: BatchesPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EopRoutingModule {
}
