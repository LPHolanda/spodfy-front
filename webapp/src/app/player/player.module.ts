import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player.component';
import { CoreModule } from '../core/core.module';

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