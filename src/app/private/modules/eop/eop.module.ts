import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EopRoutingModule} from './eop-routing.module';
import {BatchesPageComponent} from './pages';
import {SharedModule} from "../../../shared";


const COMPONENTS = [
    BatchesPageComponent,
];

const MODULES = [SharedModule, CommonModule, EopRoutingModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...MODULES],
})
export class EopModule {
}
