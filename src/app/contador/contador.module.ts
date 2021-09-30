import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';



@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ]
    //no tengo que importar nada porque no uso ngfor, etc
})

export class ContadorModule{

}