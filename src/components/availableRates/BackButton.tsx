import { Image, StyleSheet, View } from 'react-native';

const BackButton = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../images/leftArrowblack.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButton;
