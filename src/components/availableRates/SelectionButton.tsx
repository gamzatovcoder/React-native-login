import { Pressable, StyleSheet, Text, View } from 'react-native';
import { cartTariff } from '../../constants/types';
import CustomLoader from './CustomLoader';
import useSelectTariff from '../../hooks/useSelectTariff';

const SelectionButton = (tariffData: cartTariff) => {
  const { isLoading, isSelected, selectTariff } = useSelectTariff(tariffData);

  return (
    <Pressable onPress={selectTariff}>
      <View style={[styles.button, isSelected ? styles.buttonActive : null]}>
        {isLoading ? (
          <CustomLoader />
        ) : (
          <Text style={styles.buttonText}>
            {isSelected ? 'Ваш тариф' : 'Подключить'}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0097D6',
    borderRadius: 200,
    height: 32,
    width: 120,
  },

  buttonText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  buttonActive: {
    backgroundColor: '#28C07A',
  },
});

export default SelectionButton;
