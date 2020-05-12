//Angular Material Components
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MangaComponent } from './manga/manga.component';
import { ComicComponent } from './comic/comic.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaComicsComponent } from './tabla-comics/tabla-comics.component';
import { TablaFavoritosComponent } from './tabla-favoritos/tabla-favoritos.component';
import { TablaMangaComponent } from './tabla-manga/tabla-manga.component';
import { PaginaComponent } from './pagina/pagina.component';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './popup/dialog-overview-example';
import { PopupMangaComponent, PopupMangaDialog } from './popup-manga/popup-manga.component';
import { PostsComponent } from './components/posts/posts.component';


import { FiltroGeneroPipe } from './pipe/filtro-genero.pipe';
import { FiltroNombrePipe } from './pipe/filtro-nombre.pipe';
import { FiltroAutorPipe } from './pipe/filtro-autor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MangaComponent,
    ComicComponent,
    FavoritosComponent,
    TablaComicsComponent,
    TablaFavoritosComponent,
    TablaMangaComponent,
    PaginaComponent,
    DialogOverviewExample, 
    DialogOverviewExampleDialog, 
    PopupMangaComponent,
    PopupMangaDialog,
    PostsComponent,
    FiltroGeneroPipe,
    FiltroNombrePipe,
    FiltroAutorPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [DialogOverviewExampleDialog, PopupMangaDialog],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
