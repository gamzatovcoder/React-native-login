import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { cartTariff } from '../../constants/types';

const initialState: { value: cartTariff | null } = {
  value: null,
};
export const selectedTariffSlice = createSlice({
  name: 'selectedTariff',
  initialState,
  reducers: {
    setSelectedTariff: (state, action: PayloadAction<cartTariff>) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedTariff } = selectedTariffSlice.actions;

export const selectProduct = (state: RootState) => state.selectedTariff.value;

export default selectedTariffSlice.reducer;
