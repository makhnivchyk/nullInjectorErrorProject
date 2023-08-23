import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PrivateRoutingModule} from './private-routing.module';
import {ContainerLayoutComponent, SidebarComponent} from "./components";
import {SharedModule} from "../shared";


const COMPONENTS = [
  ContainerLayoutComponent,
  SidebarComponent
]

const MODULES = [
  CommonModule,
  PrivateRoutingModule,
  SharedModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES
  ]
})
export class PrivateModule {
}
