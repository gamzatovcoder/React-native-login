import { useNavigation } from '@react-navigation/native';
import AdaptiveInputScreen from '../components/login/AdaptiveInputScreen';

const InputIdScreen = () => {
  const navigation = useNavigation();

  const handleNext = (): void => {
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
