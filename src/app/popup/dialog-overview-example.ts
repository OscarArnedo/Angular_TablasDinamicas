import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ComicComponent } from '../comic/comic.component';

const comics = new ComicComponent();

export interface DialogData {
  nombre: string;
  autor: string;
  genero: string;
  imagen: string;
  descripcion: string;
}

@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {

  constructor(public dialog: MatDialog) {}

  openDialog(x:number): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '50%',
      data: {nombre: comics.comics[x].getNombre(), autor: comics.comics[x].getAutor(), genero: comics.comics[x].getGenero(), imagen: comics.comics[x].getImagen(), descripcion: comics.comics[x].getTexto()}
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}