import DropZone from '../../components/DropZone';
import styles from './styles.module.css';
import { generateDropdownDetails } from '../../utils/generateDropdownDetails';
import DataItemType from '../../types/DataItemType';
import { useDispatch, useSelector } from 'react-redux';
import { homeActions } from './slice';
import {
    selectData,
    selectIsDropZoneEnable,
    selectIsWorkerActive,
} from './slice/selector';
import Dropdowns from '../../components/Dropdowns';
import MultiSelectDropdown from '../../components/MultiSelectDropdown';
import Table from '../../components/Table';
import React from 'react';
import LinearLoader from '../../components/LinearLoader';

function Home() {
    const dispatch = useDispatch();
    const isDropdownEnabled = useSelector(selectIsDropZoneEnable);
    const exportedData = useSelector(selectData);
    const isWorkerActive = useSelector(selectIsWorkerActive);

    const onFileUpload = (data: DataItemType[]) => {
        dispatch(homeActions.setWorkerActive(true));

        // Running the heavy task on worker
        const worker = new Worker(new URL('../../worker.js', import.meta.url));

        const dataArgs = { message: 'fabricate', data };
        worker.postMessage(dataArgs);

        worker.onmessage = (event) => {
            const details = event.data;
            console.log(event.data);

            dispatch(homeActions.setDropZone(false));
            dispatch(homeActions.updateFilters(details.filters));
            dispatch(homeActions.setData(details.filteredData));
            dispatch(homeActions.setWorkerActive(false));

            worker.terminate();
        };
    };

    const columns = React.useMemo(() => {
        if (
            !(
                exportedData &&
                Array.isArray(exportedData) &&
                exportedData.length > 0
            )
        )
            return [];

        return Object.keys(exportedData[0]).map((key) => {
            return {
                name: key,
                selector: (row: DataItemType) => row[key],
            };
        });
    }, [exportedData]);

    const renderMainSection = () => {
        if (isDropdownEnabled) return <DropZone onFileUpload={onFileUpload} />;

        return (
            <>
                <Dropdowns />
                <Table columns={columns} data={exportedData} />
            </>
        );
    };

    return (
        <>
            <div className={styles['container']}>
                <LinearLoader isActive={isWorkerActive} />
                <h1>Loop AI Assignment</h1>
                {renderMainSection()}
            </div>
        </>
    );
}

export default Home;
