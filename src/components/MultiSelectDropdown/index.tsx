import Multiselect from 'multiselect-react-dropdown';
import { FilterItem } from '../../types/Filter';

interface Props {
    label: string;
    defaultValues: any[];
    onSelect: (selectedList: FilterItem[], selectedItem: FilterItem) => void;
    onRemove: (selectedList: FilterItem[], selectedItem: FilterItem) => void;
    selectedValues: any[];
}

const MultiSelectDropdown = (props: Props) => {
    const { defaultValues, onRemove, onSelect, selectedValues, label } = props;

    return (
        <div>
            {label}:
            <Multiselect
                isObject={false}
                options={defaultValues}
                selectedValues={selectedValues}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue={label}
            />
        </div>
    );
};
export default MultiSelectDropdown;
