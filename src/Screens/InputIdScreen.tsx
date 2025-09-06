import { useNavigation } from '@react-navigation/native';
import AdaptiveInputScreen from '../components/login/AdaptiveInputScreen';

const InputIdScreen = () => {
  const navigation = useNavigation();

  const handleNext = (): void => {
    navigation.navigate('InputPasswordScreen');
  };

  return (
    <AdaptiveInputScreen
      mainButtonHandler={handleNext}
      inputImage={'user'}
      inputAttributes={{
        placeholder: 'Id',
        keyboardType: 'numeric',
      }}
      buttonText={'Продолжить'}
    />
  );
};
export default InputIdScreen;
