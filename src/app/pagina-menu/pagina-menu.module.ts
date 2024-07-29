import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PaginaMenuPageRoutingModule } from './pagina-menu-routing.module';

import { PaginaMenuPage } from './pagina-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaMenuPageRoutingModule
  ],
  declarations: [PaginaMenuPage]
})
export class PaginaMenuPageModule {}
