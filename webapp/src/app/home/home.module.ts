import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [ 
        CommonModule,
        CoreModule,
        SharedModule
    ],
    exports: [
        HomeComponent
    ],
    providers: [],
})
export class HomeModule {}