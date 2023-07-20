import IdGenerator from '../lib/IdGenerator';
import DataItemType from '../types/DataItemType';
import Filter from '../types/Filter';

export const generateDropdownDetails = (data: DataItemType[]) => {
    const filters: Filter[] = [];

    data.forEach((item: Record<string, string | number>, index: number) => {
        Object.keys(item).forEach((key) => {
            const filtersIndex = filters.findIndex((x) => x.name === key);

            const itemValue = item[key];

            if (filtersIndex !== -1) {
                if (
                    itemValue &&
                    !filters[filtersIndex].defaultValues.includes(itemValue)
                ) {
                    filters[filtersIndex].defaultValues.push(itemValue);
                }
            } else {
                filters.push({
                    id: IdGenerator.generateUUIDv4(),
                    defaultValues: [itemValue],
                    name: key,
                    selectedValues: [],
                });
            }
        });
    });

    return {
        filters,
        filteredData: data,
    };
};
