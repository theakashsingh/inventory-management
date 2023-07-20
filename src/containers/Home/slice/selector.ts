import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store/configureStore';

const selectHome = (state: RootState) => state.home;

export const selectData = createSelector(selectHome, (state) => state.data);

export const selectFilters = createSelector(
    selectHome,
    (state) => state.filters
);

export const selectIsDropZoneEnable = createSelector(
    selectHome,
    (state) => state.isDropZoneEnable
);
