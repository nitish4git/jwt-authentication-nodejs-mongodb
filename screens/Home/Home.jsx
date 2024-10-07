import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{backgroundColor:'white', height:'100%'}}>
      <Text style={{textAlign:'center', marginTop:50 , fontSize:30}}>This is Home page</Text>
      <TouchableOpacity style={{backgroundColor:'blue' , padding:20, marginHorizontal:70 , marginTop:550 , borderRadius:33 , elevation:10}}>
        <Text style={{textAlign:"center", fontSize:22, color:'white'}}>sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})