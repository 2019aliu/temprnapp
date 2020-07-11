import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen.js';
import ModuleOne from './components/ModuleOne.js';
import ModuleOneQuestion from './components/ModuleOneQuestion.js';
import ModuleOneEnd from './components/ModuleOneEnd.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ModuleOne" component={ModuleOne} />
        <Stack.Screen name="ModuleOneQuestion" component={ModuleOneQuestion} />
        <Stack.Screen name="ModuleOneEnd" component={ModuleOneEnd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
