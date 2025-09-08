import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InputIdScreen from '../Screens/InputIdScreen';
import InputPasswordScreen from '../Screens/InputPasswordScreen';
import MainScreen from '../Screens/MainScreen';
import AvailableTariffsScreen from '../Screens/AvailableTariffsScreen';
import { StyleSheet } from 'react-native';
import ButtonToMain from '../components/other/ButtonToMain';
import { tabBar } from '../constants/styleConstants';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="InputIdScreen"
        backBehavior="history"
        screenOptions={{
          tabBarStyle: styles.tabBar,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            tabBarButton: () => <ButtonToMain />,
          }}
        />
        <Tab.Screen
          name="AvailableTariffsScreen"
          component={AvailableTariffsScreen}
          options={{
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="InputPasswordScreen"
          component={InputPasswordScreen}
          options={{
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="InputIdScreen"
          component={InputIdScreen}
          options={{
            tabBarStyle: { display: 'none' },
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    width: '100%',
    height: tabBar.height,
    paddingHorizontal: 16,
    backgroundColor: '#F8F8F8',

    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 8,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    boxShadow:
      ' 0px -1px 2px 0px #A1A1A11A, 0px -3px 3px 0px #A1A1A117, 0px -7px 4px 0px #A1A1A10D, 0px -12px 5px 0px #A1A1A103, 0px -20px 5px 0px #A1A1A100',
  },
});
