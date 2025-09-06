import { useNavigation } from '@react-navigation/native';
import AdaptiveInputScreen from '../components/login/AdaptiveInputScreen';
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const InputIdScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backhandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backhandler.remove();
  });

  const handleNext = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <AdaptiveInputScreen
      inputImage={'lock'}
      isVisibleButtonBack={true}
      inputAttributes={{
        placeholder: 'Пароль',
        secureTextEntry: true,
        keyboardType: 'numeric',
      }}
      buttonText={'Войти в приложение'}
      mainButtonHandler={handleNext}
    />
  );
};
export default InputIdScreen;
