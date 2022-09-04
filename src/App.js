import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import reducers from './redux/reducers';
import Welcome from './screens/Welcome';
import SignIn from './screens/SignIn';
import Profile from './screens/Profile';

const store = createStore(reducers);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'profile'}>
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{headerTransparent: true}}
          />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{headerTransparent: true}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
