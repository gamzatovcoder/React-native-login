import { Pressable, StyleSheet, Text, View } from 'react-native';
import { cartTariff } from '../../constants/types';
import CustomLoader from './CustomLoader';
import useSelectTariff from '../../hooks/useSelectTariff';

type Props = cartTariff & { handler?: () => void };

const SelectionButton = ({ handler, ...tariffData }: Props) => {
  const { isLoading, isSelected, selectTariff } = useSelectTariff(tariffData);

  return (
    <Pressable onPress={handler ? handler : selectTariff}>
      <View
        style={[
          styles.button,
          isLoading
            ? styles.buttonIsLoading
            : isSelected
            ? styles.buttonActive
            : null,
        ]}
      >
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
    paddingVertical: 9,
    paddingHorizontal: 28,
    backgroundColor: '#0097D6',
    borderRadius: 200,
  },

  buttonIsLoading: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 8,
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
