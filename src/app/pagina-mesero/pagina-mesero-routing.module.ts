import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMeseroPage } from './pagina-mesero.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMeseroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMeseroPageRoutingModule {}
