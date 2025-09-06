import { Image, StyleSheet, View } from 'react-native';

const BackButton = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../images/leftArrowBlue.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BackButton;
