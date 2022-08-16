import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {


  heroes: string[] = ['Spiderman','Kakaroto','Seya','Jiman'];

  heroeBorrado:string = '';

  borrarHeroe():void{
    console.log('Borrando');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado)
  }

  constructor() {
    // console.log('Desde el contructor')
   }

  ngOnInit(): void {
    // console.log('Desde ngOnInit')
  }

}
