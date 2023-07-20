import DataItemType from '../../../types/DataItemType';
import Filter from '../../../types/Filter';

export default interface HomeState {
    data: DataItemType[];
    filters: Filter[];
    isDropZoneEnable: boolean;
    isWorkerActive: boolean;
}
