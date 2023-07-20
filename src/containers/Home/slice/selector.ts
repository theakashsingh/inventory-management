import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../store/configureStore';

const selectHome = (state: RootState) => state.home;

const selectData = createSelector(selectHome, (state) => state.data);
