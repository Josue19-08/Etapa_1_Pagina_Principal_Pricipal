import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'pagina-principal',
    pathMatch: 'full'
  },
  {
    path: 'pagina-principal',
    loadChildren: () => import('./pagina-principal/pagina-principal.module').then(m => m.PaginaPrincipalPageModule)
  },
  {
    path: 'pagina-cuenta',
    loadChildren: () => import('./pagina-cuenta/pagina-cuenta.module').then( m => m.PaginaCuentaPageModule)
  },
  {
    path: 'pagina-menu',
    loadChildren: () => import('./pagina-menu/pagina-menu.module').then( m => m.PaginaMenuPageModule)
  },
  {
    path: 'pagina-mesero',
    loadChildren: () => import('./pagina-mesero/pagina-mesero.module').then( m => m.PaginaMeseroPageModule)
  },
  {
    path: 'pagina-orden',
    loadChildren: () => import('./pagina-orden/pagina-orden.module').then( m => m.PaginaOrdenPageModule)
  },
  {
    path: 'pagina-resenna',
    loadChildren: () => import('./pagina-resenna/pagina-resenna.module').then( m => m.PaginaResennaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
