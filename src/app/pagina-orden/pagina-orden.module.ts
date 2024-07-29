import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaOrdenPageRoutingModule } from './pagina-orden-routing.module';

import { PaginaOrdenPage } from './pagina-orden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaOrdenPageRoutingModule
  ],
  declarations: [PaginaOrdenPage]
})
export class PaginaOrdenPageModule {}
