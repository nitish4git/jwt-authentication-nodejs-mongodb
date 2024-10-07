import { View, Text , Image , TouchableOpacity , StyleSheet , TextInput, Alert} from 'react-native'
import React , {useState} from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import registerImage from "../../src/assets/images/Register.jpg";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const Register = () => {
    const navigation = useNavigation();
    const [name , setName]  = useState();
    const [email , setEmail]  = useState();
    const [phone , setPhone]  = useState();
    const [password , setPassword]  = useState();
    const handleName = (e)=>{
        setName(e)
    }
    const handleEmail = (e)=>{
        setEmail(e)
    }
    const handlePhone = (e)=>{
        setPhone(e)
    }
    const handlePassword = (e)=>{
        setPassword(e)
    }

   const handleSubmit = async ()=>{
    const userData = {name , email , phone , password};
    try {
      const res = await axios.post("http://192.168.1.3:5000/api/register" , userData);
      if(res.data.status ==="ok"){
        Alert.alert("Acount created successfull");
        navigation.navigate('login')
      }
    } catch (error) {
      console.log("Something wents wrong" , error)
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
        <Image source={registerImage} style={styles.Image} />
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Register !!</Text>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput placeholder=" Enter name" style={styles.inputField} onChangeText={handleName}/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              placeholder=" Enter email"
              style={styles.inputField}
              onChangeText={handleEmail}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput placeholder=" Enter phone" style={styles.inputField} onChangeText={handlePhone}/>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Pasword</Text>
            <TextInput placeholder=" Enter password" style={styles.inputField} onChangeText={handlePassword}/>
          </View>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={{textAlign: 'center', color: 'black', paddingTop: 10}}>
            Already have an account ? <Text style={{color:'blue'}}>LOGIN</Text>
          </Text>
          </TouchableOpacity>
          
         
        </View>
      </View>
    </View>
  )
}

export default Register;
const styles = StyleSheet.create({
    Image: {
      height: hp(27),
      width: wp(80),
      alignSelf: 'center',
    },
    heading: {
      fontSize: hp(4),
      color: 'blue',
      marginTop:15
    },
    inputRow: {
      padding: hp(0.5),
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