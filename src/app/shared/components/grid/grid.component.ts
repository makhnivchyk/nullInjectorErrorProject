import {Component, inject, Injector, Input, TemplateRef} from '@angular/core';
import {GridColumnInterface} from "../../../core";

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
    @Input() gridData: any; //TODO ???
    @Input() columns: GridColumnInterface[];
    @Input() isCheckboxColumn: boolean = false;
    @Input() headerGridTemplate: TemplateRef<any>;

    injector = inject(Injector)

}
