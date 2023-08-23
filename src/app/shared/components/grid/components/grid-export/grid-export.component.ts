import {Component, Input} from '@angular/core';
import {filePdfIcon} from '@progress/kendo-svg-icons';

@Component({
    selector: 'app-grid-export',
    templateUrl: './grid-export.component.html',
    styleUrls: ['./grid-export.component.scss'],
})
export class GridExportComponent {
    @Input() grid: any
    protected readonly filePdfIcon = filePdfIcon;

}
