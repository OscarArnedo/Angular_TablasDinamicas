import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, from } from 'rxjs';
import { ComicComponent } from '../comic/comic.component';


var comics = new ComicComponent();

// TODO: Replace this with your own data model type
export interface TablaComicsItem {
  nombre: string;
  id: number;
  autor: string;
  genero: string;
  imagen: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaComicsItem[] = [
  {id: 1, nombre: comics.getComic(0).getNombre(), autor:comics.getComic(0).getAutor(), genero: comics.getComic(0).getGenero(), imagen:comics.getComic(0).getImagen() },
  {id: 2, nombre: comics.getComic(1).getNombre(), autor:comics.getComic(1).getAutor(), genero: comics.getComic(1).getGenero(), imagen:comics.getComic(1).getImagen() },
  {id: 3, nombre: comics.getComic(2).getNombre(), autor:comics.getComic(2).getAutor(), genero: comics.getComic(2).getGenero(), imagen:comics.getComic(2).getImagen() },
  {id: 4, nombre: comics.getComic(3).getNombre(), autor:comics.getComic(3).getAutor(), genero: comics.getComic(3).getGenero(), imagen:comics.getComic(3).getImagen() },
  {id: 5, nombre: comics.getComic(4).getNombre(), autor:comics.getComic(4).getAutor(), genero: comics.getComic(4).getGenero(), imagen:comics.getComic(4).getImagen() },
  {id: 6, nombre: comics.getComic(5).getNombre(), autor:comics.getComic(5).getAutor(), genero: comics.getComic(5).getGenero(), imagen:comics.getComic(5).getImagen() },
  {id: 7, nombre: comics.getComic(6).getNombre(), autor:comics.getComic(6).getAutor(), genero: comics.getComic(6).getGenero(), imagen:comics.getComic(6).getImagen() },

];

/**
 * Data source for the DateTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaComicsDataSource extends DataSource<TablaComicsItem> {
  data: TablaComicsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablaComicsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaComicsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaComicsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'nombre': return compare(a.nombre, b.nombre, isAsc);
        case 'autor': return compare(+a.autor, +b.autor, isAsc);
        case 'genero': return compare(+a.genero, +b.genero, isAsc);
        case 'imagen': return compare(+a.imagen, +b.imagen, isAsc);
        //case 'favorito': return compare(+a.favorito, +b.favorito, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}