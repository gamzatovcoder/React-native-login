import { StyleSheet, Text, View } from 'react-native';
import { cartTariff } from '../../constants/types';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../../store/hooks';
import { useGetProductsQuery } from '../../store/services/apiTariff';
import CartTariff from '../availableRates/CartTariff';

const CurrentCartTariff = () => {
  const currentTariff: cartTariff | null = useAppSelector(
    state => state.selectedTariff.value,
  );

  const navigation = useNavigation();

  const navigateTo = (): void => {
    navigation.navigate('AvailableTariffsScreen');
  };

  const { data, isLoading, isError } = useGetProductsQuery();

  // я использовал бесплатное api в котором нет всех данных для карточки тарифа,
  // так что я создаю данные на основе id из полученных обьектов
  const tariffId = data?.[0]?.id;

  return (
    <View style={styles.cartWrapper}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error...</Text>
      ) : currentTariff ? (
        <CartTariff index={0} handler={navigateTo} tarifData={currentTariff} />
      ) : (
        //данные создаются на основе id
        <CartTariff
          key={tariffId}
          index={0}
          handler={navigateTo}
          tarifData={{
            tariffNumber: tariffId.length,
            price: tariffId.length * 100,
            specifications: {
              speed: 'Скорость до 100 Мбит/с.',
              repair: tariffId.length % 2 === 0 ? 'Сервис PRO' : false,
              tv: '500+ каналов IP TV',
            },
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartWrapper: {
    alignItems: 'center',
    width: '100%',
  },
});
export default CurrentCartTariff;
