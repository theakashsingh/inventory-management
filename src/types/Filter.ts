export type FilterItem = string | number;

export default interface Filter {
    id: string;
    name: string;
    defaultValues: FilterItem[];
    selectedValues: FilterItem[];
}
