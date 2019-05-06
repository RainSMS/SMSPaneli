import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {GruplarComponent} from "./telefonrehberi/gruplar/gruplar.component";
import {NumarasepetiComponent} from "./telefonrehberi/numarasepeti/numarasepeti.component";
import {KaralisteComponent} from "./telefonrehberi/karaliste/karaliste.component";
import {BeyazlisteComponent} from "./telefonrehberi/beyazliste/beyazliste.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'rehber/gruplar',
      component: GruplarComponent,
    },
    {
      path: 'rehber/sepetim',
      component: NumarasepetiComponent,
    },
    {
      path: 'rehber/karaliste',
      component: KaralisteComponent,
    }, {
      path: 'rehber/beyazliste',
      component: BeyazlisteComponent,
    },
    {
      path: '**',
      component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
