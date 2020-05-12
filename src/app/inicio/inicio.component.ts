import { Component, OnInit } from '@angular/core';
import { fader} from '../route-animations';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations: [
    fader
  ]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
