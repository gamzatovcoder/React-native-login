import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButtonExtension from '../components/Extensions/BackButton';
import CartTariff from '../components/availableRates/CartTariff';
import BackButton from '../components/availableRates/BackButton';
import { useGetProductsQuery } from '../store/services/apiTariff';

const AvailableTariffsScreen = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  // я использовал бесплатное api в котором нет всех данных для карточки тарифа,
  // так что я создаю данные на основе id из полученных обьектов
  const dataList: number[] = data
    ?.slice(0, 4)
    .map(({ id }) => id.length)
    .sort((a, b) => a - b);

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <SafeAreaView style={styles.SafeAreaWrapper}>
          <View style={styles.topBlock}>
            <View style={styles.buttonBacuWrapper}>
              <BackButtonExtension>
                <BackButton />
              </BackButtonExtension>
            </View>
            <Text style={styles.title}>Доступные тарифы</Text>
          </View>
          <View style={styles.cartList}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : isError ? (
              <Text>Error...</Text>
            ) : (
              //данные создаются на основе id
              dataList?.map((id, index) => {
                return (
                  <CartTariff
                    key={id}
                    index={index}
                    tarifData={{
                      tariffNumber: id,
                      price: id * 100,
                      specifications: {
                        speed: 'Скорость до 100 Мбит/с.',
                        repair: id % 2 === 0 ? 'Сервис PRO' : false,
                        tv: '500+ каналов IP TV',
                      },
                    }}
                  />
                );
              })
            )}
            {}
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
    marginHorizontal: 'auto',
    width: '100%',
    maxWidth: 328,
  },
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
