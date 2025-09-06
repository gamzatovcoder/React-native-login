import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { cartTariff } from '../../constants/types';

type State = {
  value: cartTariff | null;
  indexTariffIsLoading: number | null;
};

const initialState: State = {
  value: null,
  indexTariffIsLoading: null,
};
export const selectedTariffSlice = createSlice({
  name: 'selectedTariff',
  initialState,
  reducers: {
    setSelectedTariff: (state, action: PayloadAction<cartTariff>) => {
      state.value = action.payload;
    },
    setIsLoadingByIndex: (state, action: PayloadAction<number | null>) => {
      state.indexTariffIsLoading = action.payload;
    },
  },
});

export const { setSelectedTariff, setIsLoadingByIndex } =
  selectedTariffSlice.actions;

export const selectProduct = (state: RootState) => state.selectedTariff.value;

export default selectedTariffSlice.reducer;
