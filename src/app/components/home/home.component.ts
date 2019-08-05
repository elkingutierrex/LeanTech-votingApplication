import { Component, OnInit } from '@angular/core';
import { CandidatosService, Votante} from '../../services/votaciones.service';

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

    let registro={ id: id
                 ,swVoto: false}

    this.listaVotantes = this._candidatoService.generarRegistroVotante(registro);

    let votoActual =  this.listaVotantes.find(registro => registro.id === id)

    if(!votoActual.swVoto){
      console.log("Puede votars")
    }else{
      console.log("ya el usuario realizo el voto")
      return;

    }



  }





}
