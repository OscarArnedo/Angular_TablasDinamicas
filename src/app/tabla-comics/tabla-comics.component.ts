import { AfterViewInit, Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaComicsDataSource, TablaComicsItem } from './tabla-comics-datasource';
import { ComicComponent } from '../comic/comic.component';
import { MatDialogRef, MatDialog } from '@angular/material';

import { Pipe, PipeTransform } from '@angular/core';

/*const filtoAutor = new FilterAutor();
const filtroGenero = new FilterGenero();
const filtroTitulo = new FilterTitulo();*/

export interface DialogData {
  nombre: string;
  autor: string;
  genero: string;
  imagen: string;
  //descripcion: string;
}

@Component({
  selector: 'app-tabla-comics',
  templateUrl: './tabla-comics.component.html',
  styleUrls: ['./tabla-comics.component.css']
})
export class TablaComicsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TablaComicsItem>;
  dataSource: TablaComicsDataSource;
  comic: ComicComponent;
  

  constructor(public dialog: MatDialog) {
    /*var filterAutor = '';
    var filterTitulo = '';
    var filterGenero = '';*/
  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'autor','genero','imagen', 'favorito'];  

  ngOnInit() {
    this.dataSource = new TablaComicsDataSource();
    this.comic = new ComicComponent();
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  filterGenero = '';
  filterNombre = '';
  filterAutor = '';


}
