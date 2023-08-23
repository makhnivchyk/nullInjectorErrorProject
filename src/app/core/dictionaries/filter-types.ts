export type FilterTypes = 'text' | 'numeric' | 'boolean' | 'date';
    // | DropdownFilterType ;

type DropdownFilterType = {
    label: 'dropdown' | 'dropdownWithSearch',
    options: {
        textField: string,
        valueField: string,
        data: any
    }
}
