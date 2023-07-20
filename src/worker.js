/**
 * Generates a UUID (Universally Unique Identifier).
 * @returns {string} The generated UUID.
 */
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

/**
 * Generates dropdown details from the provided data.
 * @param {Array<object>} data - The input data in the form of an array of objects.
 * @returns {object} An object containing filters extracted from the data.
 */
function generateDropdownDetails(data) {
    const filters = [];

    data.forEach((item) => {
        Object.keys(item).forEach((key, index) => {
            if (index !== 0) {
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
            }
        });
    });

    return {
        filters,
    };
}

/**
 * Updates filters and data based on the selected values for a specific filter.
 * @param {Array<object>} data - The input data in the form of an array of objects.
 * @param {object} filter - The filter object to be updated with selected values.
 * @param {Array<any>} selectedValueList - The list of selected values for the filter.
 * @returns {object} An object containing updated filters and data.
 */
function updateFiltersAndDataOnSelect(data, filter, selectedValueList) {
    const existingFitler = filter;

    if (selectedValueList) existingFitler.selectedValues = selectedValueList;

    const updatedData = data.filter((d) =>
        existingFitler.selectedValues.includes(d[filter.name])
    );

    const filters = [existingFitler];

    data.forEach((item) => {
        Object.keys(item).forEach((key, index) => {
            if (key !== filter.name && index !== 0) {
                const filtersIndex = filters.findIndex((x) => x.name === key);

                const itemValue = item[key];

                if (filtersIndex !== -1) {
                    if (
                        itemValue &&
                        !filters[filtersIndex].defaultValues.includes(itemValue)
                    ) {
                        filters[filtersIndex].defaultValues.push(itemValue);
                        filters[filtersIndex].selectedValues.push(itemValue);
                    }
                } else {
                    filters.push({
                        id: generateUUID(),
                        defaultValues: [itemValue],
                        name: key,
                        selectedValues: [itemValue],
                    });
                }
            }
        });
    });

    return {
        filters,
        data: updatedData,
    };
}

/**
 * Updates filters and data based on the removed values for a specific filter.
 * @param {Array<object>} data - The input data in the form of an array of objects.
 * @param {object} filter - The filter object to be updated with selected values.
 * @param {Array<any>} selectedValueList - The list of selected values for the filter.
 * @returns {object} An object containing updated filters and data.
 */
function updateFiltersAndDataOnRemove(data, filter, selectedValueList) {
    const existingFitler = filter;

    if (selectedValueList) existingFitler.selectedValues = selectedValueList;

    const updatedData = data.filter((d) =>
        existingFitler.selectedValues.includes(d[filter.name])
    );

    const filters = [existingFitler];

    data.forEach((item) => {
        Object.keys(item).forEach((key, index) => {
            if (key !== filter.name && index !== 0) {
                const filtersIndex = filters.findIndex((x) => x.name === key);

                const itemValue = item[key];

                if (filtersIndex !== -1) {
                    if (
                        itemValue &&
                        !filters[filtersIndex].defaultValues.includes(itemValue)
                    ) {
                        filters[filtersIndex].defaultValues.push(itemValue);
                        filters[filtersIndex].selectedValues.push(itemValue);
                    }
                } else {
                    filters.push({
                        id: generateUUID(),
                        defaultValues: [itemValue],
                        name: key,
                        selectedValues: [itemValue],
                    });
                }
            }
        });
    });

    return {
        filters,
        data: updatedData,
    };
}

/**
 * Function to handle messages from the main thread (if used in a Web Worker context).
 * @param {MessageEvent} event - The message event received from the main thread.
 */
onmessage = (event) => {
    const { message } = event.data;
    switch (message) {
        case 'fabricate': {
            const { data } = event.data;
            const result = generateDropdownDetails(data);
            postMessage(result);
            break;
        }

        case 'select': {
            const { data, filter, selectedValueList } = event.data;
            const result = updateFiltersAndDataOnSelect(
                data,
                filter,
                selectedValueList
            );
            postMessage(result);
            break;
        }

        case 'remove': {
            const { data, filter, selectedValueList } = event.data;
            const result = updateFiltersAndDataOnRemove(
                data,
                filter,
                selectedValueList
            );
            postMessage(result);
            break;
        }

        default:
            break;
    }
};
