import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveGreenDirective } from './active-green.directive';

@NgModule({
    declarations: [
        ActiveGreenDirective
    ],
    imports: [ 
        CommonModule 
    ],
    exports: [
        ActiveGreenDirective
    ]
})
export class ActiveGreenModule {}