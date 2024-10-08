import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login&Register/Login';
import Register from './screens/Login&Register/Register';
import Home from './screens/Home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './screens/Profile/Profile';
const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = ()=>{
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name='homePage' component={Home}/>
      <Tab.Screen name ='profilePage' component={Profile}/>
    </Tab.Navigator>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='login' component={Login}/>
        <stack.Screen name="register" component={Register}/>
        <stack.Screen name='home' component={Tabs}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})