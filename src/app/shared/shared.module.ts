import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelerikModule} from "./telerik.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {GridComponent, GridExportComponent} from "./components";
import {CoreModule} from "../core";


const MODULES = [TelerikModule, FormsModule, ReactiveFormsModule, RouterModule, CoreModule];

const COMPONENTS = [
  GridComponent,
  GridExportComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, ...MODULES
  ],
  exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule {
}
