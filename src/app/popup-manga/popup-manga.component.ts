import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MangaComponent } from '../manga/manga.component';

const mangas = new MangaComponent();

export interface DialogData {
  nombre: string;
  autor: string;
  genero: string;
  imagen: string;
  descripcion: string;
}
@Component({
  selector: 'app-popup-manga',
  templateUrl: './popup-manga.component.html',
  styleUrls: ['./popup-manga.component.css']
})
export class PopupMangaComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(x:number): void {
    const dialogRef = this.dialog.open(PopupMangaDialog, {
      width: '50%',
      data: {nombre: mangas.mangas[x].getNombre(), autor: mangas.mangas[x].getAutor(), genero: mangas.mangas[x].getGenero(), imagen: mangas.mangas[x].getImagen(), descripcion: mangas.mangas[x].getTexto()}
    });
  }

}

@Component({
  selector: 'popup-manga-dialog',
  templateUrl: 'popup-manga-dialog.html',
})
export class PopupMangaDialog {

  constructor(
    public dialogRef: MatDialogRef<PopupMangaDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}