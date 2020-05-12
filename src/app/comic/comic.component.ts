import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { fader} from '../route-animations';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css'],
  animations: [
    fader
  ]
})

export class ComicComponent implements OnInit {
  public comics = [];

  myControl = new FormControl();
  options: string[] = ['Asterix','Tintin','Xmen','Hulk','Spiderman','Aquaman','Superman'];
  filteredOptions: Observable<string[]>;

  constructor() {
    this.comics.push(new Comic("Asterix y los Normandos","René Goscinny","Aventuras","asterix.jpg","Estamos en el año 50 antes de Jesucristo. Toda la Galia está ocupada por los romanos… ¿Toda? ¡No! Una aldea poblada por irreductibles galos resiste, todavía y como siempre, al invasor. Y la vida no es fácil para las guarniciones de legionarios romanos en los reducidos campamentos de Babaorum, Aquarium, Laudanum y Petibonum..."));
    this.comics.push(new Comic("Tintin Aterrizaje en la luna","Hergé","Aventuras","tintin.jpg","La historia continúa en el punto donde queda el álbum anterior: el profesor Tornasol, Tintin, Milú, el Capitán Haddock y el asistente de Tornasol, Frank Wolff, están a bordo de una nave espacial atómica que sale de la Tierra con destino a la Luna. Pronto, después del despegue descubren que los detectives Hernández y Fernández se han subido accidentalmente a bordo, poniendo en tensión el suministro de oxígeno. Los detectives accidentalmente apagan el motor nuclear, interrumpiendo la gravedad artificial y haciendo flotar a todo el mundo hasta que Tintin corrige el problema. "));
    this.comics.push(new Comic("Xmen","Marvel","Superheroes","xmen.jpg","Los X-Men, también conocidos como Patrulla-X en España​ y Hombres X en Hispanoamérica, son un equipo de superhéroes ficticios que aparecen en los cómics estadounidenses publicados por Marvel Comics. Creado por el artista / coautor Jack Kirby y el escritor Stan Lee, los personajes aparecieron por primera vez en The X-Men # 1 (septiembre de 1963)​y formaron una de las franquicias más reconocidas y exitosas de Marvel Comics."));
    this.comics.push(new Comic("Aquaman","DC","Superheroes","acuaman.jpg","Aquaman (Arthur Curry) es un superhéroe que aparece en los cómics estadounidenses publicados por DC Comics. Creado por el artista Paul Norris y el escritor Mort Weisinger, el personaje debutó en More Fun Comics # 73 (noviembre de 1941). Inicialmente, una característica de respaldo en los títulos de antología de DC, Aquaman más tarde protagonizó varios volúmenes de una serie de cómics en solitario."));
    this.comics.push(new Comic("El increíble hulk","Stan Lee","Superheroes","hulk.jpg","Hulk debutó en el número 1 de la colección de cómics The Incredible Hulk (mayo de 1962), con guion de Stan Lee, dibujo de Jack Kirby y entintado de Paul Reinman. En la primera historieta, Hulk era gris en vez de verde. Stan Lee, escritor y editor en jefe, había querido un color que no sugiriera ningún grupo étnico en particular. El colorista Stan Goldberg, sin embargo, insistió a Lee en que la tecnología del momento no podía presentar el color gris claro de forma correcta, dándose diferentes tonos de gris e incluso verde."));
    this.comics.push(new Comic("Spiderman","Marvel","Superheroes","spiderman.jpg","Spider-Man (llamado Hombre Araña en muchas de las traducciones al español) es un superhéroe ficticio creado por los escritores y editores Stan Lee y Steve Ditko. Apareció por primera vez en el cómic de antología Amazing Fantasy # 15 (10 de agosto de 1962), en la Edad de Plata de los cómics. Aparece en los cómics estadounidenses publicados por Marvel Comics, así como en varias películas, programas de televisión y adaptaciones de videojuegos ambientadas en el Universo Marvel."));
    this.comics.push(new Comic("Superman","DC","Superheroes","superman.jpg","En Action Comics # 1 (1938), Superman nace en un mundo extraño a una especie tecnológicamente avanzada que se parece a los humanos. Poco después de nacer, su planeta se destruye en un cataclismo natural, pero el padre científico de Superman previó la calamidad y salva a su hijo bebé enviándolo a la Tierra en una pequeña nave espacial. Lamentablemente, la nave es demasiado pequeña para llevar a alguien más, por lo que los padres de Superman se quedan atrás y mueren."));
   }

  ngOnInit() {
    if(localStorage.getItem('Favoritos') == null){
      localStorage.setItem("Favoritos","");
    }
    
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  
  anadirFavorito(t:string){
    try {
      let favs = localStorage.getItem('Favoritos').split(',');
      if (favs != null) {
        favs.push(t);
        let join = favs.join(',');
        localStorage.setItem('Favoritos', join);
      } else {
        localStorage.setItem('Favoritos', [t].toString());
      }
    } catch (err) {
      console.log(err);
    }
  }

  getComic(t:number){
    return this.comics[t];
  }

}
export class Comic {
  private titulo:string;
  private autor:string;
  private genero:string;
  private imagen:string;
  private texto:string;

  constructor(titulo:string, autor:string, genero:string, imagen:string, texto:string) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.imagen = imagen;
    this.texto = texto;
  }

  getNombre(){
    return this.titulo;
  }

  getAutor(){
    return this.autor;
  }

  getGenero(){
    return this.genero;
  }

  getImagen(){
    return this.imagen;
  }

  getTexto(){
    return this.texto;
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}

