import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BackButtonExtension from '../components/Extensions/BackButton';
import CartTariff from '../components/availableRates/CartTariff';
import BackButton from '../components/availableRates/BackButton';
import { useGetProductsQuery } from '../store/services/apiTariff';
import { tabBar } from '../constants/styleConstants';

const AvailableTariffsScreen = () => {
  const { data, isLoading, isError } = useGetProductsQuery();

  // я использовал бесплатное api в котором нет всех данных для карточки тарифа,
  // так что я создаю данные на основе id из полученных обьектов
  const dataList = data
    ?.slice(0, 4)
    .map(({ id }) => id.length)
    .sort((a, b) => a - b)
    .map(id => {
      return { id: id };
    });

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error...</Text>
      ) : (
        //данные создаются на основе id
        <FlatList
          contentContainerStyle={{
            rowGap: 16,
            paddingBottom: 124 - tabBar.height,
          }}
          ListHeaderComponent={() => (
            <View style={styles.topBlock}>
              <View style={styles.buttonBackWrapper}>
                <BackButtonExtension>
                  <BackButton />
                </BackButtonExtension>
              </View>
              <Text style={styles.title}>Доступные тарифы</Text>
            </View>
          )}
          data={dataList}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index }) => (
            <View style={{ width: '100%', alignItems: 'center' }}>
              <CartTariff
                buttonFor="selectTariff"
                key={item.id}
                index={index}
                tarifData={{
                  tariffNumber: item.id,
                  price: item.id * 100,
                  specifications: {
                    speed: 'Скорость до 100 Мбит/с.',
                    repair: item.id % 2 === 0 ? 'Сервис PRO' : false,
                    tv: '500+ каналов IP TV',
                  },
                }}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 16,
  },

  topBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 48,
    marginBottom: 38,
  },
  buttonBackWrapper: {
    position: 'absolute',
    left: 0,
  },
  title: {
    fontSize: 16,
  },
});

export default AvailableTariffsScreen;
