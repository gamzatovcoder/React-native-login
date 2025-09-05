import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonBack from '../components/availableRates/ButtonBack';
import CartTariff from '../components/availableRates/CartTariff';
import { useGetProductsQuery } from '../store/services/apiTariff';

const AvailableTariffsScreen = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  const dataList = data?.slice(0, 4);

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error...</Text>;

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollWrapper}>
        <SafeAreaView style={styles.SafeAreaWrapper}>
          <View style={styles.topBlock}>
            <View style={styles.buttonBacuWrapper}>
              <ButtonBack />
            </View>
            <Text style={styles.title}>Доступные тарифы</Text>
          </View>
          <View style={styles.cartList}>
            {dataList?.map(({ id }) => {
              return (
                <CartTariff
                  key={id}
                  tariffNumber={id.length}
                  price={id.length * 100}
                  specifications={{
                    repair: 'Скорость до 100 Мбит/с.',
                    speed: '500+ каналов IP TV',
                    tv: id.length % 2 === 0 ? 'Сервис PRO' : false,
                  }}
                />
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F1F5F9',
  },
  SafeAreaWrapper: {
    paddingHorizontal: 16,
  },
  scrollWrapper: {},
  topBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 48,
    marginBottom: 38,
  },
  buttonBacuWrapper: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 16,
  },
  cartList: {
    rowGap: 16,
    alignItems: 'center',
    marginBottom: 124,
  },
});

export default AvailableTariffsScreen;
