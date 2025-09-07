import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  setSelectedTariff,
  setIsLoadingByIndex,
} from '../store/slices/selectedTariffSlice';
import { useEffect } from 'react';
import { cartTariff } from '../constants/types';

interface Return {
  isLoading: boolean;
  isSelected: boolean;
  selectTariff: () => void;
}

const useSelectTariff = (tariffData: cartTariff): Return => {
  const dispatch = useAppDispatch();

  //выбран ли этот tariff
  const isSelected: boolean = useAppSelector(
    state =>
      state.selectedTariff.value?.tariffNumber === tariffData.tariffNumber,
  );

  //какой tariff загружается
  const indexTariffIsLoading: number | null = useAppSelector(
    state => state.selectedTariff.indexTariffIsLoading,
  );
  //загружается ли этот tariff
  const isLoading = indexTariffIsLoading === tariffData.tariffNumber;

  // имитация загрузки через setTimeout с последуюшим сохранением
  useEffect(() => {
    let loadingTime: number | undefined;
    if (isLoading) {
      loadingTime = setTimeout(() => {
        dispatch(setSelectedTariff(tariffData));
        dispatch(setIsLoadingByIndex(null));
      }, 4000);
    }
    return () => {
      if (loadingTime) {
        clearTimeout(loadingTime);
      }
    };
  }, [dispatch, isLoading, tariffData]);

  //функция выбора тарифа
  const selectTariff = (): void => {
    dispatch(setIsLoadingByIndex(tariffData.tariffNumber));
  };

  return { isLoading, isSelected, selectTariff };
};

export default useSelectTariff;
