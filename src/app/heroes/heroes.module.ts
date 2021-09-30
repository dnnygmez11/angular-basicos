import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
 


@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ // que cosas son visibles al ojo publico
        ListadoComponent
    ],
    imports:[ //van modulos 
        CommonModule // para las directivas de ngfor,ngif, etc
    ]
})

export class HeroesModule{

}