import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import InputIdScreen from '../Screens/InputIdScreen';
import InputPasswordScreen from '../Screens/InputPasswordScreen';
import MainScreen from '../Screens/MainScreen';
import AvailableTariffsScreen from '../Screens/AvailableTariffsScreen';

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
    MainScreen: {
      screen: MainScreen,
      options: { headerShown: false },
    },
    AvailableTariffsScreen: {
      screen: AvailableTariffsScreen,
      options: { headerShown: false },
    },
  },
});

export const Router = createStaticNavigation(RootStack);
