
import {Component} from '@angular/core'

@Component({
  selector : 'app-contador',
  template: `

<h1>{{title}}</h1>

<h1>La base del numero es {{base}}</h1>

<!-- Forma 1 -->
<!-- <button (click) =" numero = numero + 1; "> +1 </button> -->

<!-- Forma 2 -->
<!-- <button (click) =" sumar() "> +1 </button> -->

<!-- Forma 3 -->
<!-- <button (click) =" acumular(+1) "> +1 </button> -->

<!-- Forma 4 Tarea -->
<button (click) =" acumular(+base) "> +{{base}} </button>

<span>{{numero}}</span>

<!-- Forma 1 -->
<!-- <button (click) = " numero = numero -1; "> -1 </button> -->

<!-- Forma 2 -->
<!-- <button (click) = " restar() "> -1 </button> -->

<!-- Forma 3 -->
<!-- <button (click) =" acumular(-1) "> -1 </button> -->

<!-- Forma 4 Tarea -->
<button (click) =" acumular(-base) "> -{{base}} </button>
  `

})

export class ContadorComponent{
  public title: string = 'Contador App';
  public numero:number = 10;
  public base:number = 5;


  sumar(){
    this.numero += 1;
  }

  restar(){
    this.numero -= 1;
  }

  acumular(valor:number){
    this.numero += valor

  }

  acumular_tarea(valor:number){
    this.numero += valor
  }

}
