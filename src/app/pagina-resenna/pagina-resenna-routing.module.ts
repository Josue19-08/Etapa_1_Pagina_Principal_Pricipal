import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaResennaPage } from './pagina-resenna.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaResennaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaResennaPageRoutingModule {}
