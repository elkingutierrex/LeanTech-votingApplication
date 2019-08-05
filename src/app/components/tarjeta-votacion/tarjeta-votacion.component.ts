import { Component, OnInit } from '@angular/core';
import { CandidatosService, Candidato} from '../../services/votaciones.service';
import { Router } from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-tarjeta-votacion',
  templateUrl: './tarjeta-votacion.component.html'
})
export class TarjetaVotacionComponent implements OnInit {

  candidatos:Candidato[]= [];
  title: string;
  subtitle: string;
  date:number;
  arrayConteoVotos:any[]=[];

  habilitarVotacion : boolean;

  constructor( private _candidatosService :CandidatosService,
               private router:Router) {
    this.title = "Votaciones";
    this.subtitle = "Alcaldia Medellín";
    this.date = new Date().getFullYear();
    this.habilitarVotacion = _candidatosService.getEstadoVotacion();

    if(!this.habilitarVotacion){
      this.router.navigate(['/home'])
    }

  }

  ngOnInit() {
    this.candidatos = this._candidatosService.getCandidatos();
  }

  generarVoto(candidato:any, ){

    alertify.confirm("Esta seguro de que su voto sera por:  <b>" + candidato.nombre + " ?</b>" ,()=>{
    alertify.success('Voto registrado');
    this.candidatos = this._candidatosService.generarVoto(candidato);
  },
  function(){
    alertify.error('Cancelado');
  });


  }

}
