import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import loginImage from '../../src/assets/images/Login.jpg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const navigation = useNavigation();
  const [email , setEmail] = useState();
  const [password , setPassword] = useState();

  const handleEmail = (e)=>{
    setEmail(e);
  };
  const handlePassword = (e) =>{
    setPassword(e);
  }
  const handleSubmit = async ()=>{
    const userData = {email , password}
    try {
      const res = await axios.post("http://192.168.1.8:5000/api/login" , userData);
      // console.log(res)
      // console.log(res.data.token)
      if(res.data.status === "ok"){
        Alert.alert("Login Successfull");
        const token = res.data.token
        await AsyncStorage.setItem("token",token)
        navigation.navigate("home")
      }else{
        Alert.alert("Invalid email or password")
      }
    } catch (error) {
      console.log("something wents wrong",error)
    }
  }
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
          paddingHorizontal: wp(5),
        }}>
        <Image source={loginImage} style={styles.Image} />
        <View style={styles.formContainer}>
          <Text style={styles.heading}>LOG IN !!</Text>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput placeholder=" Enter email" style={styles.inputField} onChangeText={handleEmail}/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              placeholder=" Enter password"
              style={styles.inputField}
              onChangeText={handlePassword}
            />
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'black', paddingTop: 10}}>
            ---Don't have an accout ?---
          </Text>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: 'black'}]}
            onPress={() => navigation.navigate('register')}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  Image: {
    height: hp(35),
    width: wp(80),
    alignSelf: 'center',
  },
  heading: {
    fontSize: hp(5),
    color: 'blue',
  },
  inputRow: {
    padding: hp(1),
  },
  inputField: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'aliceblue',
    elevation: 10,
    paddingLeft: 10,
  },
  inputLabel: {
    fontSize: hp(2.5),
    padding: wp(1),
    color: 'black',
  },
  btn: {
    backgroundColor: 'tomato',
    width: wp(40),
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
    borderRadius: 33,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});
