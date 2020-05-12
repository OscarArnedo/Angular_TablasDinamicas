import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { ComicComponent } from '../comic/comic.component';
import { MangaComponent } from '../manga/manga.component';

var comics = new ComicComponent();
var mangas = new MangaComponent();


// TODO: Replace this with your own data model type
export interface TablaFavoritosItem {
  id: number;
  nombre: string; 
  autor: string;
  genero: string;
  imagen: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaFavoritosItem[] = [];

if(localStorage.getItem('Favoritos')!= null && localStorage.getItem('Favoritos')!=""){
  var array = localStorage.getItem('Favoritos').split(',');

  for(let i = 1; i<array.length;i++){
    for(let x = 0; x<comics.comics.length;x++){
      if(comics.comics[x].getNombre() == array[i]){
        EXAMPLE_DATA.push({id: (i), nombre: array[i], autor: comics.comics[x].getAutor(), genero: comics.comics[x].getGenero(), imagen: comics.comics[x].getImagen()})
      }
    }
    for(let x = 0; x<mangas.mangas.length;x++){
      if(mangas.mangas[x].getNombre() == array[i]){
        EXAMPLE_DATA.push({id: (i), nombre: array[i], autor: mangas.mangas[x].getAutor(), genero: mangas.mangas[x].getGenero(), imagen: mangas.mangas[x].getImagen()})
      }
    }
  }
}

export class TablaFavoritosDataSource extends DataSource<TablaFavoritosItem> {
  data: TablaFavoritosItem[] = EXAMPLE_DATA;
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
  connect(): Observable<TablaFavoritosItem[]> {
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
  private getPagedData(data: TablaFavoritosItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaFavoritosItem[]) {
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
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
