import React from 'react';
import 'react-native-gesture-handler';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeProvider} from './theme/theme.provider';
import {StoreProvider} from './store/store.provider';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </StoreProvider>
  );
};
export default App;
