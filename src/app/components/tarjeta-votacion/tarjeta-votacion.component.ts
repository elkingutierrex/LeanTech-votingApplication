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

  constructor( private _candidatosService :CandidatosService,
               private router:Router) {
    this.title = "Votaciones";
    this.subtitle = "Alcaldia";
    this.date = new Date().getFullYear();

  }

  ngOnInit() {
    this.candidatos = this._candidatosService.getCandidatos();
  }

  generarVoto(candidato:any){

    alertify.confirm("Esta seguro de que su voto sera por:  <b>" + candidato.nombre + " ?</b>" ,()=>{
    alertify.success('Ok');
    this.candidatos.forEach(item=>{
      if( item.id=== candidato.id ){
        item.cantidadVotos++;
      }
    })
  },
  function(){
    alertify.error('Cancel');
  });


  }

}
