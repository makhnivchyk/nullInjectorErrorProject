import {FilterTypes} from '@core/dictionaries';

export interface GridColumnInterface {
    field: string;
    title: string;
    filterType: FilterTypes;
}

