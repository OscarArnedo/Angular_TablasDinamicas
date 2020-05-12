import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate, query, animateChild, group } from '@angular/animations';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css'],
  animations:[
    trigger('animacionCuadro',[
      state('1', style({
      backgroundImage: 'url(../../assets/s1.png)'
      })),
      state('2', style({
        backgroundImage: 'url(../../assets/s2.png)'
      })),
      state('3', style({
        backgroundImage: 'url(../../assets/s3.png)'
      })),
      state('4', style({
        backgroundImage: 'url(../../assets/s4.png)'
      })),
      transition('* <=> *',
        animate(1000)
      ),
    ]),
    trigger('animacionEpilepsia',[
      state('1', style({
          backgroundColor: 'blue',
          height: '300px'
        })),
        state('2', style({
          backgroundColor: 'green',
          height: '300px'
        })),
        state('3', style({
          backgroundColor: 'blue',
          height: '500px'
        })),
        state('4', style({
          backgroundColor: 'blue',
          height: '300px',
          borderRadius: '50%'
        })),
        transition('* <=> *',
          animate(1000)
        ), 
    ]),  
  ]
})
export class PaginaComponent implements OnInit {
  estadoCuadro = 1;
  estadoDiv = "1";
  constructor() { }

  ngOnInit() {
  }

  siguiente(){
    if(this.estadoCuadro == 4){
      this.estadoCuadro = 1;
    }else{
      this.estadoCuadro++;
    }
    
  }

  anterior(){
    if(this.estadoCuadro == 1){
      this.estadoCuadro = 4;
    }else{
      this.estadoCuadro--;
    }
    
  }
  lila(){
    this.estadoDiv = this.estadoDiv === '1' ? '2': '1';
  }

  aumentar(){
    this.estadoDiv = this.estadoDiv === '3' ? '1': '3';
  }

  bordes(){
    this.estadoDiv = this.estadoDiv === '4' ? '1': '4';
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
  
}
