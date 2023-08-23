import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TelerikModule} from "./telerik.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CoreModule} from "@core";
import {GridComponent, GridExportComponent} from "@shared/components";

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
