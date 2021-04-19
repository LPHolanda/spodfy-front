import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisarComponent } from './pesquisar.component';
import { PesquisarRoutingModule } from './pesquisar.routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        PesquisarComponent
    ],
    imports: [ 
        CommonModule,
        CoreModule,
        PesquisarRoutingModule
    ],
    exports: [
        PesquisarComponent
    ]
})
export class PesquisarModule {}