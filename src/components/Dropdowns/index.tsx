import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import { selectFilters } from '../../containers/Home/slice/selector';
import MultiSelectDropdown from '../MultiSelectDropdown';
import Filter, { FilterItem } from '../../types/Filter';
import DropdownActions from './enums/DropdownActions';

function Dropdowns() {
    const filters = useSelector(selectFilters);

    const onDropdownAct =
        (filter: Filter, action: DropdownActions) =>
        (selectedList: FilterItem[], selectedItem: FilterItem) => {
            console.log({ filter, action, selectedList, selectedItem });
        };

    return (
        <div className={styles['container']}>
            {filters.map((filter: Filter) => (
                <MultiSelectDropdown
                    key={filter.id}
                    defaultValues={filter.defaultValues}
                    selectedValues={filter.selectedValues}
                    label={filter.name}
                    onSelect={onDropdownAct(filter, DropdownActions.SELECT)}
                    onRemove={onDropdownAct(filter, DropdownActions.REMOVE)}
                />
            ))}
        </div>
    );
}

export default Dropdowns;
