import { Pressable, StyleSheet, Text } from 'react-native';
import { cartTariff } from '../../constants/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSelectedTariff } from '../../store/slices/selectedTariffSlice';
const SelectionButton = (tariffData: cartTariff) => {
  const tariff: cartTariff | null = useAppSelector(
    state => state.selectedTariff.value,
  );

  const isSelectedTariff = (): boolean => {
    return tariff?.tariffNumber === tariffData.tariffNumber;
  };

  const dispatch = useAppDispatch();
  const selectTariff = () => {
    dispatch(setSelectedTariff(tariffData));
  };

  return (
    <Pressable onPress={selectTariff}>
      <Text style={[styles.button, isSelectedTariff() && styles.buttonActive]}>
        {isSelectedTariff() ? 'Ваш тариф' : 'Подключить'}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 9,
    paddingHorizontal: 28,
    backgroundColor: '#0097D6',
    borderRadius: 200,
    fontSize: 12,
  },
  buttonActive: {
    backgroundColor: '#28C07A',
  },
});

export default SelectionButton;
