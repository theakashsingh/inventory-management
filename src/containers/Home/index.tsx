import DropZone from '../../components/DropZone';
import styles from './styles.module.css';
import { generateDropdownDetails } from '../../utils/generateDropdownDetails';
import DataItemType from '../../types/DataItemType';

function Home() {
    const onFileUpload = (data: DataItemType[]) => {
        console.log({ data, filters: generateDropdownDetails(data) });
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
