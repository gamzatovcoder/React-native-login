import { Image, StyleSheet, Text, View } from 'react-native';
import { cartTariff } from '../../constants/types';
import SelectionButton from './selectionButton';
const CartTariff = ({ specifications, tariffNumber, price }: cartTariff) => {
  const specificationsList = [
    {
      name: 'speed',
      image: require('../../images/speed.png'),
      text: specifications.speed,
    },
    {
      name: 'tv',
      image: require('../../images/tv.png'),
      text: specifications.tv,
    },
    {
      name: 'repair',
      image: require('../../images/repair.png'),
      text: specifications.repair,
    },
  ];

  return (
    <View style={styles.cart}>
      <Image
        style={styles.imageFrame}
        source={require('../../images/frame.png')}
      />
      <View style={styles.numberTariffWrapper}>
        <Text style={styles.numberTariff}>Тариф {tariffNumber}</Text>
      </View>
      <View style={styles.specificationList}>
        {specificationsList.map(item => {
          if (item.text) {
            return (
              <View style={styles.specificationWrapper} key={item.name}>
                <Image style={styles.specificationImage} source={item.image} />
                <Text style={styles.specificationText}>{item.text}</Text>
              </View>
            );
          }
        })}
      </View>
      <View style={styles.bottomBlock}>
        <Text style={styles.priceDescription}>
          <Text style={styles.price}>{price}</Text> ₽/мес.
        </Text>
        <SelectionButton
          price={price}
          specifications={specifications}
          tariffNumber={tariffNumber}
        />
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    width: '100%',
    maxWidth: 328,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 15,
  },
  imageFrame: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  numberTariffWrapper: {
    width: 96,
    height: 29,
    backgroundColor: '#E0F3FE',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  numberTariff: {
    fontSize: 14,
    fontWeight: 600,
    color: '#0097D6',
  },
  specificationList: {
    rowGap: 13,
    marginBottom: 17,
  },
  specificationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specificationImage: {
    marginRight: 4,
  },
  specificationText: {
    fontSize: 12,
  },
  bottomBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 24,
  },
  priceDescription: {
    fontSize: 16,
  },
});
export default CartTariff;
