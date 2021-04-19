import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisarComponent } from './pesquisar.component';

const routes: Routes = [
    {
        path: '',
        component: PesquisarComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PesquisarRoutingModule {
    
}