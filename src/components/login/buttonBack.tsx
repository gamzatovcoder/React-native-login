import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet } from 'react-native';

const PhoneNumberScreen = () => {
  const navigation = useNavigation();

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <Pressable style={styles.wrapper} onPress={backHandler}>
      <Image source={require('../../images/leftArrow.png')} />
    </Pressable>
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

export default PhoneNumberScreen;
