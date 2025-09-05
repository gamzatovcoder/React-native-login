import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet } from 'react-native';

const PhoneNumberScreen = () => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <Pressable style={styles.wrapper} onPress={backHandler}>
      <Image source={require('../../images/leftArrowWhite.png')} />
    </Pressable>
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

export default PhoneNumberScreen;
