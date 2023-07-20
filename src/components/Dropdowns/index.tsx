import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { selectFilters } from '../../containers/Home/slice/selector';
import MultiSelectDropdown from '../MultiSelectDropdown';
import Filter, { FilterItem } from '../../types/Filter';
import DropdownActions from './enums/DropdownActions';
import { homeActions } from '../../containers/Home/slice';
import { getData } from '../../services/IndexDbWrapper/rawData';

function Dropdowns() {
    const filters = useSelector(selectFilters);
    const dispatch = useDispatch();

    const onDropdownAct =
        (filter: Filter, action: DropdownActions) =>
        (selectedList: FilterItem[], selectedItem: FilterItem) => {
            dispatch(homeActions.setWorkerActive(true));
            getData()
                .then((data) => {
                    // Running the heavy task on worker
                    const worker = new Worker(
                        new URL('../../worker.js', import.meta.url)
                    );

                    const dataArgs = {
                        message: action,
                        data,
                        filters,
                        filter,
                        selectedValueList: selectedList,
                    };
                    worker.postMessage(dataArgs);

                    worker.onmessage = (event) => {
                        const details = event.data;

                        dispatch(homeActions.updateFilters(details.filters));
                        dispatch(homeActions.setData(details.data));
                        dispatch(homeActions.setWorkerActive(false));

                        worker.terminate();
                    };
                })
                .catch((error) => {
                    console.error(error);
                });
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
