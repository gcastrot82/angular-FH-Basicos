import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
  declarations:[
    // Todol oque esta aca esta invisible para la aplicacion,
    HeroeComponent,
    ListadoComponent
  ],
  // Que cosas quiero que sean visible en mis modulos
  exports:[
    ListadoComponent
  ],
  // Los imports significa que van modulos
  imports: [
    CommonModule
  ]

})
export class HeroesModule {

}
