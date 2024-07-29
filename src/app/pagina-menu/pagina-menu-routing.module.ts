import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaMenuPage } from './pagina-menu.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaMenuPageRoutingModule {}
