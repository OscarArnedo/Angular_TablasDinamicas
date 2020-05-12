import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, from } from 'rxjs';
import { MangaComponent } from '../manga/manga.component';


var mangas = new MangaComponent();

// TODO: Replace this with your own data model type
export interface DateTableItem {
  nombre: string;
  id: number;
  autor: string;
  genero: string;
  imagen: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DateTableItem[] = [
  {id: 1, nombre: mangas.getManga(0).getNombre(), autor:mangas.getManga(0).getAutor(), genero: mangas.getManga(0).getGenero(), imagen:mangas.getManga(0).getImagen() },
  {id: 2, nombre: mangas.getManga(1).getNombre(), autor:mangas.getManga(1).getAutor(), genero: mangas.getManga(1).getGenero(), imagen:mangas.getManga(1).getImagen() },
  {id: 3, nombre: mangas.getManga(2).getNombre(), autor:mangas.getManga(2).getAutor(), genero: mangas.getManga(2).getGenero(), imagen:mangas.getManga(2).getImagen() },
  {id: 4, nombre: mangas.getManga(3).getNombre(), autor:mangas.getManga(3).getAutor(), genero: mangas.getManga(3).getGenero(), imagen:mangas.getManga(3).getImagen() },
  {id: 5, nombre: mangas.getManga(4).getNombre(), autor:mangas.getManga(4).getAutor(), genero: mangas.getManga(4).getGenero(), imagen:mangas.getManga(4).getImagen() },
  {id: 6, nombre: mangas.getManga(5).getNombre(), autor:mangas.getManga(5).getAutor(), genero: mangas.getManga(5).getGenero(), imagen:mangas.getManga(5).getImagen() },
  {id: 7, nombre: mangas.getManga(6).getNombre(), autor:mangas.getManga(6).getAutor(), genero: mangas.getManga(6).getGenero(), imagen:mangas.getManga(6).getImagen() },

];

/**
 * Data source for the DateTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DateTableDataSource extends DataSource<DateTableItem> {
  data: DateTableItem[] = EXAMPLE_DATA;
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
  connect(): Observable<DateTableItem[]> {
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
  private getPagedData(data: DateTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DateTableItem[]) {
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