import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { ComicComponent } from './comic/comic.component';
import { MangaComponent } from './manga/manga.component';
import { PaginaComponent } from './pagina/pagina.component';
import { DialogOverviewExample } from './popup/dialog-overview-example';
import { PostsComponent } from'./components/posts/posts.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent , data: {animation: 'inici'}},
  { path: 'favoritos', component: FavoritosComponent , data: {animation: 'favorito'}},
  { path: 'comic', component: ComicComponent, data: {animation: 'comic'} },
  { path: 'manga', component: MangaComponent, data: {animation: 'manga'} },
  { path: 'pagina', component: PaginaComponent, data: {animation: 'inici'}},
  { path: 'popup', component: DialogOverviewExample},
  { path: 'post', component: PostsComponent},



  { path: 'inicio', redirectTo: '/inicio', pathMatch: 'full' },

  { path: 'favoritos', redirectTo: '/favoritos', pathMatch: 'full'  },

  { path: 'comic', redirectTo: '/comic', pathMatch: 'full' },

  { path: 'manga', redirectTo: '/manga', pathMatch: 'full' },

  { path: 'pagina', redirectTo: '/pagina', pathMatch: 'full' },

  { path: 'popup', redirectTo: '/popup'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
