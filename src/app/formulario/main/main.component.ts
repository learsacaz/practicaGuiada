import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  curso:{
    nombre:string;
    descripcion:string;
    duracion:number;
    costo:number;
  };

  cursos=Array();

  constructor(){
      this.curso = {
          nombre:'',
          descripcion:'',
          duracion:0,
          costo:0
      }
      this.cursos = [
          {nombre:'Java', descripcion: 'Curso Nivel 1', duracion:24, costo:15},
          {nombre:'Oracle', descripcion: 'Curso Nivel 1', duracion:24, costo:12},
          {nombre:'PHP', descripcion: 'Curso Nivel 1', duracion:24, costo:10},
          {nombre:'Java2', descripcion: 'Curso Nivel 2', duracion:42, costo:18}
      ]
  }
  ngOnInit(): void {
  }

  cantCursos(){
      return this.cursos.length>0;
  }
  registrarCurso(){
      for(let x=0;x<this.cursos.length;x++){
          if(this.cursos[x].nombre==this.curso.nombre){
              alert('El Curso ys está registrado');
              return;
          }
      }
      this.cursos.push({
          nombre:this.curso.nombre,
          descripcion:this.curso.descripcion,
          duracion:this.curso.duracion,
          costo:this.curso.costo
      });
      this.curso.nombre='';
      this.curso.descripcion='';
      this.curso.duracion=0;
      this.curso.costo=0;
  }
  selectCurso(curso:any){
      this.curso.nombre=curso.nombre;
      this.curso.descripcion=curso.descripcion;
      this.curso.duracion=curso.duracion;
      this.curso.costo=curso.costo;
  }
  borrarCurso(curso:any){
      for(let i=0;i<this.cursos.length;i++){
          if(this.cursos[i].nombre==this.curso.nombre){
              this.cursos.splice(i,1);
              return;
          }
        }       
    }
}
