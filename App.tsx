/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { TabNavigation } from './src/router/Router';
import { store } from './src/store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}

export default App;
