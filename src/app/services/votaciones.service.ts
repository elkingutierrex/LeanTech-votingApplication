import { Injectable} from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CandidatosService{

private candidatos:Candidato[]=
[
  {
    nombre: "Aquaman",
    id: 1,
    img: "assets/img/aquaman.png",
    aparicion: "1941-11-01",
    partidoPolitico:"DC"
  },
  {
    nombre: "Batman",
    id: 2,
    img: "assets/img/batman.png",
    aparicion: "1939-05-01",
    partidoPolitico:"DC"
  },
  {
    nombre: "Daredevil",
    id: 3,
    img: "assets/img/daredevil.png",
    aparicion: "1964-01-01",
    partidoPolitico: "Marvel"
  },
  {
    nombre: "Hulk",
    id: 4,
    img: "assets/img/hulk.png",
    aparicion: "1962-05-01",
    partidoPolitico:"Marvel"
  },
  {
    nombre: "Linterna Verde",
    id: 5,
    img: "assets/img/linterna-verde.png",
    aparicion: "1940-06-01",
    partidoPolitico: "DC"
  },
  {
    nombre: "Spider-Man",
    id: 6,
    img: "assets/img/spiderman.png",
    aparicion: "1962-08-01",
    partidoPolitico: "Marvel"
  },
  {
    nombre: "Wolverine",
    id: 7,
    img: "assets/img/wolverine.png",
    aparicion: "1974-11-01",
    partidoPolitico: "Marvel"
  }
];

private listaVotantes:Votante[]=[];

private habilitarVotacion: boolean;

votanteActual: any;
swVotacionesActivas:boolean;

  constructor( private router : Router ){
    this.swVotacionesActivas = true;
    console.log("Servicio listo para usar!!")
    this.candidatos.forEach((item)=>{
      if(!item.cantidadVotos){
        item.cantidadVotos = 0;
      }
    })
    this.habilitarVotacion = false;
  }

  getCandidatos():Candidato[]  {
    return this.candidatos;
  }

  getListaVotantes():Votante[]{
    return this.listaVotantes;
  }

  generarVoto(candidato:Candidato):Candidato[]{
    this.candidatos.forEach(item=>{
      if( item.id=== candidato.id ){
        item.cantidadVotos++;
      }
    })

    this.listaVotantes.forEach((item)=>{
      if(item.id == this.votanteActual.id){
        item.swVoto = true;
      }
    })

    this.router.navigate(['/home'])

    return this.candidatos;
  }

  generarRegistroVotante(votante:Votante):boolean{
    let id = votante.id;
    let voto =  this.listaVotantes.find(registro => registro.id === id)
    console.log("service " + votante)

    if(!voto){
      this.listaVotantes.push(votante);
    }

    let votoActual =  this.listaVotantes.find(registro => registro.id === id)

    if(!votoActual.swVoto){
     this.habilitarVotacion = true;
     this.votanteActual = (votoActual)
     this.router.navigate(['/tarjeton'])

    }else{
      this.habilitarVotacion = false;
    }

    return this.habilitarVotacion;

  }

  getEstadoVotacion():boolean{
    return this.habilitarVotacion;
  }

  cerrarVotacion():boolean{
    this.swVotacionesActivas = false;
    this.router.navigate(['/panel-de-control'])
    return this.swVotacionesActivas;

  }


  // getCandidato( idx:number){
  //   return this.candidatos[idx]
  // }

  // buscarCandidatos( termino:string){

  //   let candidatosArr:Candidato[]=[];
  //   termino = termino.toLocaleLowerCase();

  //   for (let i = 0; i < this.candidatos.length; i++){

  //     let heroe = this.candidatos[i]

  //     let nombre = heroe.nombre.toLocaleLowerCase();

  //     if(nombre.indexOf( termino ) >= 0 ){
  //       candidatosArr.push(heroe);
  //     }

  //   }
  //   return candidatosArr;
  // }
}

export interface Candidato{
  nombre  :string;
  id:number;
  img:string;
  aparicion:string;
  partidoPolitico:string;
  cantidadVotos?:number;
}

export interface Votante{
  id:number;
  swVoto:boolean;
}

