import { createSlice } from '@reduxjs/toolkit';
import DataItemType from '../../../types/DataItemType';
import HomeState from './types';

const initialState: HomeState = {
    data: [],
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        testAction: () => {
            console.log('Actions Working');
        },
    },
});

// this is for dispatch
export const { actions: homeActions, reducer } = homeSlice;

// this is for configureStore
export default reducer;
