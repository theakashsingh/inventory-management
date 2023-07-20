import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import DataItemType from '../../../types/DataItemType';
import HomeState from './types';
import Filter from '../../../types/Filter';

const initialState: HomeState = {
    data: [],
    filters: [],
    isDropZoneEnable: true,
    isWorkerActive: false,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setDropZone: (state, action: PayloadAction<boolean>) => {
            state.isDropZoneEnable = action.payload;
        },
        updateFilters: (state, action: PayloadAction<Filter[]>) => {
            state.filters = action.payload;
        },
        setData: (state, action: PayloadAction<DataItemType[]>) => {
            state.data = action.payload;
        },
        setWorkerActive: (state, action: PayloadAction<boolean>) => {
            state.isWorkerActive = action.payload;
        },
    },
});

// this is for dispatch
export const { actions: homeActions, reducer } = homeSlice;

// this is for configureStore
export default reducer;
