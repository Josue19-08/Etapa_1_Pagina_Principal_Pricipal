import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaCuentaPageRoutingModule } from './pagina-cuenta-routing.module';

import { PaginaCuentaPage } from './pagina-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaCuentaPageRoutingModule
  ],
  declarations: [PaginaCuentaPage]
})
export class PaginaCuentaPageModule {}
