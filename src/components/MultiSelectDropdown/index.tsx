import Multiselect from 'multiselect-react-dropdown';
import { FilterItem } from '../../types/Filter';
import styles from './styles.module.css';

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
        <div className={styles['container']}>
            <label htmlFor="">{label}:</label> 
            <Multiselect
                isObject={false}
                options={defaultValues}
                selectedValues={selectedValues}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue={label}
                showCheckbox
            />
        </div>
    );
};
export default MultiSelectDropdown;
