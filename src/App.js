
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/Signup';

import Scan from './screens/Scan';

import { LogBox } from 'react-native';

import Tabs from './containers/Tabs';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          screenOptions={{
            headerShown:false
          }}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App;