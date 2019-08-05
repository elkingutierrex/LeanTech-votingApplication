import { Component, OnInit } from '@angular/core';
import { CandidatosService, Candidato} from '../../services/votaciones.service';


@Component({
  selector: 'app-panel-de-control',
  templateUrl: './panel-de-control.component.html',
  styles: []
})
export class PanelDeControlComponent implements OnInit {

  candidatos:Candidato[]= [];

  constructor( private _candidatosService: CandidatosService) {

  }

  ngOnInit() {
    this.candidatos = this._candidatosService.getCandidatos();
    this.candidatos = this.candidatos.sort((a,b) => {
      return  b.cantidadVotos - a.cantidadVotos;
    });
  }

}
