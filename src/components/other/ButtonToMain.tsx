import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ButtonToMain = () => {
  const navigation = useNavigation();

  const navigateTo = (): void => {
    navigation.navigate('MainScreen');
  };

  return (
    <Pressable onPress={navigateTo}>
      <View style={styles.button}>
        <Image source={require('../../images/home.png')} />
        <Text style={styles.buttonText}>Главная</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#0097D6',
    paddingVertical: 8,
    paddingHorizontal: 26,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
});

export default ButtonToMain;
