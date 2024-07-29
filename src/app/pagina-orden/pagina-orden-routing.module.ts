import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaOrdenPage } from './pagina-orden.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaOrdenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaOrdenPageRoutingModule {}
