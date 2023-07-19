import DataItemType from '../types/DataItemType';
import Filters from '../types/Filters';

export const generateDropdownDetails = (data: DataItemType[]) => {
    const filters: Filters[] = [];

    data.forEach((item: Record<string, string | number>) => {
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
