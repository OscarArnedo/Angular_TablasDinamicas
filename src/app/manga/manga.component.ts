import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { fader} from '../route-animations';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css'],
  animations: [
    fader
  ]
})

export class MangaComponent implements OnInit {
  public mangas = [];
  /*
  myControl = new FormControl();
  options: string[] = ['Asterix','Tintin','Xmen','Hulk','Spiderman','Aquaman','Superman'];
  filteredOptions: Observable<string[]>;*/

  constructor() {
    this.mangas.push(new Comic("Dragon Ball","Akira Toriyama","Lucha","dball.jpg","Dragon Ball es un manga escrito e ilustrado por Akira Toriyama. Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995.1​2​. Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad. Conforme transcurre la trama, conoce a otros personajes que le ayudan en este propósito. El nombre de la serie proviene de unas esferas mágicas que al ser reunidas invocan a un dragón que concede deseos."));
    this.mangas.push(new Comic("Assasination Classroom","Yusei Matsui","Comedia","ac.jpg","Assassination Classroom (暗殺教室 Ansatsu Kyōshitsu, lit. Salón de asesinato) es una serie de manga escrita e ilustrada por Yūsei Matsui. Fue serializada en la revista semanal Shōnen Jump de la editorial Shūeisha desde el 2 de julio de 2012 al 25 de marzo de 2016, finalizando con veintiún volúmenes. La historial sigue la vida cotidiana de Koro-sensei, un peculiar maestro con la apariencia similiar a la de un pulpo, y la de sus estudiantes, cuya principal tarea es asesinarlo para evitar que la Tierra sea destruida. Assassination Classroom posee una circulación estimada de 20 millones de copias en Japón."));
    this.mangas.push(new Comic("Naruto","Masashi Kishimoto","Lucha","naruto.jpg","NARUTO, es una serie de manga escrita e ilustrada por Masashi Kishimoto. La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros. La serie está basada en un one-shot que Kishimoto realizó en agosto de 1996 para la revista Akamaru Jump.3​ A partir de noviembre de 1999, Naruto es publicado por la editorial Shūeisha en la revista semanal japonesa Shōnen Jump,4​ siendo recopilado desde entonces en setenta y dos volúmenes."));
    this.mangas.push(new Comic("One Piece","Eiichiro Oda","Lucha","opiece.jpg","One Piece (ワンピース Wan Pīsu) es un manga escrito e ilustrado por Eiichirō Oda. Comenzó a publicarse en la revista japonesa Weekly Shōnen Jump el 22 de julio de 1997. Shueisha publica los capítulos en volúmenes. Por otra parte, Toei Animation realiza el anime y se transmite en Fuji TV desde el 20 de octubre de 1999 el cual está en emisión actualmente. Larp Editores licenció el manga en Argentina y posteriormente fue retomado por Ivrea. En España principalmente la publicación estaba a manos de Planeta DeAgostini y después pasó a manos de Planeta Cómic el cual se encarga actualmente de su publicación."));
    this.mangas.push(new Comic("Berserk","Kentaro Miura","Horror","berserk.jpg","Berserk (ベルセルク Beruseruku) es un manga creado por Kentaro Miura y posteriormente adaptado en anime, con un estilo épico fantástico y de fantasía oscura. Miura publicó un prototipo de Berserk en 1988. El manga comenzó a publicarse al año siguiente en la extinta revista mensual Animal House, hasta que fue reemplazada en 1992 por la revista quincenal Young Animal, donde Berserk continúa siendo publicado a un ritmo irregular."));
    this.mangas.push(new Comic("Death Note","Takeshi Obata","Intriga","dnote.jpg","Death Note (デスノート Desu Nōto) es una serie de manga escrita por Tsugumi Ōba e ilustrada por Takeshi Obata, y cuya adaptación a serie de anime fue dirigida por Tetsurō Araki. Cuenta, además, con varias películas y videojuegos. La historia se centra en Light Yagami, un estudiante de secundaria. Un día, encuentra un cuaderno con poderes sobrenaturales llamado «Death Note», con el cual es capaz de matar personas si se escriben los nombres de estas en él, a la vez que si el portador visualiza mentalmente la cara de quien quiere asesinar.​ Light, percatándose del potencial del cuaderno, intenta eliminar a todos los criminales y crear un mundo donde no exista la maldad; sin embargo, un misterioso detective privado que se hace llamar L, famoso mundialmente por resolver grandes casos en el pasado, tratará de frustrar sus planes."));
    this.mangas.push(new Comic("Attack on Titans","Hajime Isayama","Accion","aot.jpg","Shingeki no Kyojin (進撃の巨人), también conocida en países de habla hispana como Ataque a los titanes1​ y Ataque de los titanes,2​ es una serie de manga escrita e ilustrada por Hajime Isayama. El manga se publicó por primera vez en septiembre de 2009 en la revista Bessatsu Shōnen Magazine, de la editorial japonesa Kōdansha, y cada capítulo se publica de forma mensual, alcanzando 126 capítulos hasta febrero de 2020. En España, el manga es distribuido por Norma Editorial; en México y parte de Hispanoamérica por la editorial Panini, y en Argentina por la editorial Ovni Press."));
   }

  ngOnInit() {
    if(localStorage.getItem('Favoritos') == null){
      localStorage.setItem("Favoritos","");
    }
    
    /*this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );*/
  }

  /*private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }*/
  
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

  getManga(t:number){
    return this.mangas[t];
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

