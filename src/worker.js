function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
        /[xy]/g,
        function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
}

function generateDropdownDetails(data) {
    const filters = [];

    data.forEach((item, index) => {
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
                    id: generateUUID(),
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
}

onmessage = (event) => {
    const { message, data } = event.data;
    if (message === 'fabricate') {
        const result = generateDropdownDetails(data);
        postMessage(result);
    }
};
