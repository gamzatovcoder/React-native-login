import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../store/hooks';
import { cartTariff } from '../constants/types';
import CartTariff from '../components/availableRates/CartTariff';

const AvailableTariffs = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('AvailableTariffsScreen');
  };

  const tariff: cartTariff | null = useAppSelector(
    state => state.selectedTariff.value,
  );

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.cartWrapper}>
          {tariff !== null ? (
            <CartTariff
              price={tariff?.price}
              specifications={tariff.specifications}
              tariffNumber={tariff.tariffNumber}
            />
          ) : null}
        </View>
        <View style={styles.tabBar}>
          <Pressable onPress={handleNext}>
            <Text style={styles.button}>Тарифы</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  wrapper: {
    flex: 1,

    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cartWrapper: {
    alignItems: 'center',
    marginTop: 48,
  },
  tabBar: {
    height: 60,
    backgroundColor: '#E2E2E4',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#0097D6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default AvailableTariffs;
