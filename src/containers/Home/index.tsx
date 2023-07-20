import DropZone from '../../components/DropZone';
import styles from './styles.module.css';
import { generateDropdownDetails } from '../../utils/generateDropdownDetails';
import DataItemType from '../../types/DataItemType';
import { useDispatch } from 'react-redux';
import { homeActions } from './slice';

function Home() {
    const dispatch = useDispatch();

    const onFileUpload = (data: DataItemType[]) => {
        console.log({ data, filters: generateDropdownDetails(data) });
        dispatch(homeActions.testAction());
    };

    return (
        <div className={styles['container']}>
            <h1>Loop AI Assignment</h1>
            <DropZone onFileUpload={onFileUpload} />
            {/* <MultiSelectDropdown /> */}
        </div>
    );
}

export default Home;
