import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login&Register/Login';
import Register from './screens/Login&Register/Register';
import Home from './screens/Home/Home';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='login' component={Login}/>
        <stack.Screen name="register" component={Register}/>
        <stack.Screen name="home" component={Home}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})