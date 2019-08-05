import { Component, OnInit } from '@angular/core';
import { CandidatosService, Candidato} from '../../services/votaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-candidato',
  templateUrl: './card-candidato.component.html',
  styles: []
})
export class CardCandidatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
