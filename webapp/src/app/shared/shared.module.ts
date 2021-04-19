import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
    declarations: [
        CardCarouselComponent
    ],
    imports: [ 
        CommonModule,
        SlickCarouselModule
    ],
    exports: [
        CardCarouselComponent
    ],
    providers: [],
})
export class SharedModule {

}
