import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputIdScreen from '../Screens/InputIdScreen';
import InputPasswordScreen from '../Screens/InputPasswordScreen';
import { createStaticNavigation } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  screens: {
    InputIdScreen: {
      screen: InputIdScreen,
      options: { headerShown: false },
    },
    InputPasswordScreen: {
      screen: InputPasswordScreen,
      options: { headerShown: false },
    },
  },
});

export const Router = createStaticNavigation(RootStack);
