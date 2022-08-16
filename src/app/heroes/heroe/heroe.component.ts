import { Component } from "@angular/core";


@Component({
  selector:'app-heroe',
  templateUrl:'heroe.component.html'
})
export class HeroeComponent{
  public nombre:string = 'Kakaroto';
  public edad:number = 40;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${ this.nombre} - Edad: ${this.edad}`
  }

  cambiarNombre():void{
    this.nombre = 'Vegueta'
  }

  cambiarEdad():void{
    this.edad = 30
  }
}
