import { Component, OnInit } from '@angular/core';
import { CandidatosService, Votante} from '../../services/votaciones.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private administrador:{
    contrasena:number;
  };

  listaVotantes:Votante[];




  constructor(private _candidatoService: CandidatosService) {
    // this.administrador.contrasena = 1234;

   }

  ngOnInit() {
    this.listaVotantes = this._candidatoService.getListaVotantes();
  }

  generarRegistroVotante(id:any){
    let habilitarVotacion:boolean;
    let registro={ id: id
                 ,swVoto: false}

    habilitarVotacion = this._candidatoService.generarRegistroVotante(registro);

    if(!habilitarVotacion){
      alertify
      .alert("El usuario con número de identificación: <b>" + id + "</b> ya registro el voto!", ()=>{
        alertify.message('OK');
        document.getElementById("id").value = "";
      });
    }
  }

  cerrarVotacion(password:number){
    let swVotacionesActivas : boolean;
    if(password == 12345){
      swVotacionesActivas = this._candidatoService.cerrarVotacion();
    }else{
      alertify.alert("La contraseña No es valida.",()=>{
        alertify.message('OK');
      });
    }

  }





}
