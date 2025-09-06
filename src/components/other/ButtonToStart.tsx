import { Image, StyleSheet, View } from 'react-native';

const ButtonToStart = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../images/logout.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#FFE0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonToStart;
