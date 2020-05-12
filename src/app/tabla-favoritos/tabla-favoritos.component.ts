import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaFavoritosDataSource, TablaFavoritosItem } from './tabla-favoritos-datasource';

@Component({
  selector: 'app-tabla-favoritos',
  templateUrl: './tabla-favoritos.component.html',
  styleUrls: ['./tabla-favoritos.component.css']
})
export class TablaFavoritosComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TablaFavoritosItem>;
  dataSource: TablaFavoritosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'autor', 'genero','imagen','favorito'];

  ngOnInit() {
    this.dataSource = new TablaFavoritosDataSource();
  }

  borrarFavorito(t:string){
    try {
      let favs = localStorage.getItem('Favoritos').split(',');
      if (favs != null) {
        for(var i=0;i<favs.length;i++){
          if(favs[i]==t){
            favs.splice(i,1);
          }
        }
        let join = favs.join(',');
        localStorage.setItem('Favoritos', join);
      } else {
        localStorage.setItem('Favoritos', "");
      }
    } catch (err) {
      console.log(err);
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
