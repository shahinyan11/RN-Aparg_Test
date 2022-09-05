import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import Welcome from '../screens/Welcome';
import Profile from '../screens/Profile';
import {setLoggedIn} from '../redux/actions';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {loggedIn} = useSelector(state => state.mainReducer);

  useEffect(() => {
    setLoading(true);
    AsyncStorage.getItem('currentUser').then(data => {
      if (data) {
        dispatch(setLoggedIn(true));
      }
      setLoading(false);
    });
  }, []);

  return !loading ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'welcome'}
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleStyle: {color: 'transparent'},
        }}>
        {!loggedIn ? (
          <Stack.Screen
            name="welcome"
            component={Welcome}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{
              headerTransparent: true,
            }}
          />
        )}

        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{headerTransparent: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View />
  );
};

export default StackNavigator;
