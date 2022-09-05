import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './redux/reducers';
import StackNavigator from './navigator/StackNavigator';

const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
