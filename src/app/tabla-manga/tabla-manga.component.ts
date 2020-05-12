import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DateTableDataSource, DateTableItem } from './tabla-manga-datasource';
import { MangaComponent } from '../manga/manga.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-tabla-manga',
  templateUrl: './tabla-manga.component.html',
  styleUrls: ['./tabla-manga.component.css']
})
export class TablaMangaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DateTableItem>;
  dataSource: DateTableDataSource;
  manga: MangaComponent;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'autor','genero','imagen', 'favorito'];  

  ngOnInit() {
    this.dataSource = new DateTableDataSource();
    this.manga = new MangaComponent();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
