import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiTariff } from './services/apiTariff';
import selectedTariffReducer from './slices/selectedTariffSlice';

export const store = configureStore({
  reducer: {
    selectedTariff: selectedTariffReducer,
    [apiTariff.reducerPath]: apiTariff.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiTariff.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
