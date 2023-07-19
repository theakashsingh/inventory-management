import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

interface Props {
    label: string;
    defaultValues: any[];
    onSelect: (selectedList: any, selectedItem: any) => void;
    onRemove: (selectedList: any, selectedItem: any) => void;
    selectedValues: any[];
}

const MultiSelectDropdown = (props: Props) => {
    const { defaultValues, onRemove, onSelect, selectedValues, label } = props;

    return (
        <Multiselect
            options={defaultValues}
            selectedValues={selectedValues}
            onSelect={onSelect}
            onRemove={onRemove}
            displayValue={label}
        />
    );
};
export default MultiSelectDropdown;
