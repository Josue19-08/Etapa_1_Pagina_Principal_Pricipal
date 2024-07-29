import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaResennaPageRoutingModule } from './pagina-resenna-routing.module';

import { PaginaResennaPage } from './pagina-resenna.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaResennaPageRoutingModule
  ],
  declarations: [PaginaResennaPage]
})
export class PaginaResennaPageModule {}
