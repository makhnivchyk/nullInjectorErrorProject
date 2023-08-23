import {NgModule} from '@angular/core';
import {IndicatorsModule} from '@progress/kendo-angular-indicators';
import {MultiSelectModule} from '@progress/kendo-angular-dropdowns';
import {FilterMenuModule, GridModule, PDFModule} from '@progress/kendo-angular-grid';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {DialogModule, WindowModule} from '@progress/kendo-angular-dialog';
import {NotificationModule} from '@progress/kendo-angular-notification';
import {FilterModule} from '@progress/kendo-angular-filter';
import {LabelModule} from '@progress/kendo-angular-label';
import {IconModule} from '@progress/kendo-angular-icons';
import {LayoutModule} from '@progress/kendo-angular-layout';


const MODULES = [
    IndicatorsModule,
    MultiSelectModule,
    GridModule,
    ButtonsModule,
    WindowModule,
    FilterModule,
    FilterMenuModule,
    LabelModule,
    IconModule,
    LayoutModule,
    DialogModule,
    NotificationModule,
    PDFModule
];

@NgModule({
    imports: [...MODULES],
    exports: [...MODULES],
})
export class TelerikModule {
}
