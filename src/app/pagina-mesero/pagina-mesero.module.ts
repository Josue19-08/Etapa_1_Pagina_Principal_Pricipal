import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaMeseroPageRoutingModule } from './pagina-mesero-routing.module';

import { PaginaMeseroPage } from './pagina-mesero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMeseroPageRoutingModule
  ],
  declarations: [PaginaMeseroPage]
})
export class PaginaMeseroPageModule {}
