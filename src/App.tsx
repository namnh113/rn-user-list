/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppRoutes from './routes/AppRoutes';
import {Provider} from 'react-redux';
import {store} from './store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
