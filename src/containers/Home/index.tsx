import DropZone from '../../components/DropZone';
import styles from './styles.module.css';
import { generateDropdownDetails } from '../../utils/generateDropdownDetails';
import DataItemType from '../../types/DataItemType';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from './slice';
import { selectIsDropZoneEnable } from './slice/selector';
import Dropdowns from '../../components/Dropdowns';
import MultiSelectDropdown from '../../components/MultiSelectDropdown';

function Home() {
    const dispatch = useDispatch();
    const isDropdownEnabled = useSelector(selectIsDropZoneEnable);

    const onFileUpload = (data: DataItemType[]) => {
        const details = generateDropdownDetails(data);
        console.log({ data, details });
        dispatch(homeActions.setDropZone(false));
        dispatch(homeActions.updateFilters(details.filters));
        dispatch(homeActions.setData(details.filteredData));
    };

    const renderMainSection = () => {
        if (isDropdownEnabled) return <DropZone onFileUpload={onFileUpload} />;
        return <Dropdowns />;
    };

    return (
        <div className={styles['container']}>
            <h1>Loop AI Assignment</h1>
            {renderMainSection()}
        </div>
    );
}

export default Home;
