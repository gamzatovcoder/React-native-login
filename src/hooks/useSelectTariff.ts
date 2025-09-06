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

const useSelectTariff = (
  indexTariff: number,
  tariffData: cartTariff,
): Return => {
  const dispatch = useAppDispatch();

  const isSelected = useAppSelector(
    state =>
      state.selectedTariff.value?.tariffNumber === tariffData.tariffNumber,
  );

  const indexTariffIsLoading: number | null = useAppSelector(
    state => state.selectedTariff.indexTariffIsLoading,
  );

  const isLoading = indexTariffIsLoading === indexTariff;
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

  const selectTariff = () => {
    dispatch(setIsLoadingByIndex(indexTariff));
  };

  return { isLoading, isSelected, selectTariff };
};

export default useSelectTariff;
