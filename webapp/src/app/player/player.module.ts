import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { PlayerComponent } from './player.component';

@NgModule({
    declarations: [
        PlayerComponent
    ],
    imports: [ 
        CommonModule,
        CoreModule
    ],
    exports: [
        PlayerComponent
    ],
    providers: [],
})
export class PlayerModule {}