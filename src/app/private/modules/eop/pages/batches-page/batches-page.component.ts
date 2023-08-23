import {Component} from '@angular/core';
import {GridColumnInterface} from '@core/types';

@Component({
    selector: 'app-batches-page',
    templateUrl: './batches-page.component.html',
    styleUrls: ['./batches-page.component.scss'],
})
export class BatchesPageComponent {

    public gridData = [
        {
            ProductID: 1,
            ProductName: 'Chai',
            UnitPrice: 18.0,
            Discontinued: false,
        },
        {
            ProductID: 2,
            ProductName: 'Chang',
            UnitPrice: 19.0,
            Discontinued: true,
        },
    ];

    public gridColumns: GridColumnInterface[] = [
        {field: 'ProductID', title: 'Product ID', filterType: 'numeric'},
        {field: 'ProductName', title: 'Product Name', filterType: 'text'},
        // {
        //     field: 'UnitPrice', title: 'Unit Price', filterType: {
        //         label: 'dropdown', options: {
        //             textField: 'name',
        //             valueField: 'id',
        //             data: [
        //                 {name: 'Test 1', id: 1},
        //                 {name: 'Test 2', id: 2},
        //                 {name: 'Test 3', id: 3}
        //             ]
        //         }
        //     }
        // },
    ]


}


