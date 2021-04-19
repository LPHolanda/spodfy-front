import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [ 
        ErrorComponent,
        HeaderComponent,
        MenuComponent
    ],
    imports: [ 
        CommonModule,
        AppRoutingModule
    ],
    exports: [
        ErrorComponent,
        HeaderComponent,
        MenuComponent
    ],
    providers: [ ],
})
export class CoreModule {

}
