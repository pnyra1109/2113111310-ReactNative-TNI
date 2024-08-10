import { View, Text, TextInput ,Button, Alert} from 'react-native';
import React, {useState} from 'react';
import { styles,stylesPractice,stylesLogin } from '../styles/styles';

const Login = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const validateEmail =(email:string):boolean=>{
      const recheckEmail = /\S+@\S+\.\S+/;
      return recheckEmail.test(email);
    }

    const handleSubmit = () => {
      let errorMessage ="";
      // if (username === "" && email === "" && password === "") {
      //   Alert.alert("Alert", "Please Enter Name\nPlease Enter Email\nPlease Enter Password");
      // } else if (username === "") {
      //   Alert.alert("Alert", "Please Enter Name"),[{text:"OK"}];
      //   // errorMessage+="Please Enter Name\n";
      // } else if (email === "") {
      //   Alert.alert("Alert", "Please Enter Email",[{text:"OK"}]);
      //   // errorMessage+="Please Enter Email\n";
      // } else if (password === ""){
      //   Alert.alert("Alert", "Please Enter Password",[{text:"OK"}])
      //   // errorMessage+="Please Enter Password";
      // } else {
      //   Alert.alert("Alert", "Success",[{text:"OK"}]);
      // }
      if(!username){
     /*  Alert.alert("Alert", "Please Enter Name",[{text: "OK"}]);
      return; //break; */
      errorMessage += "Please Enter Name\n";
    }
    if(!email){
      /* Alert.alert("Alert", "Please Enter Email",[{text: "OK"}]);
      return; //break; */
      errorMessage += "Please Enter Email\n";
    } else if(!validateEmail(email)){
      errorMessage += "Invalid Email Format\n";
    }

    //Check password
    if(!password){
      errorMessage += "Please Enter Password\n";
    }else if(password.length<6){
      errorMessage += "Password must be at least 6 characters.\n";
    }


    if(errorMessage){
      Alert.alert("Error",errorMessage.trim(), [{ text: "OK"}]); // Trim เกี่ยวกับเว้นวรรค
      return;
    }

    Alert.alert("Alert","Success",[{text: "OK"}]);
  }
  return (
    <View style={stylesLogin.container}>
      <TextInput
      style={stylesLogin.input}
      placeholder="Enter Username"
      value={username}
      onChangeText={setUsername}
      />
      <TextInput
      style={stylesLogin.input}
      placeholder="Enter Email"
      value={email}
      onChangeText={setEmail}
      />
      <TextInput
      style={stylesLogin.input}
      placeholder='Password'
      value= {password}
      onChangeText={setPassword}
      secureTextEntry={true}
      />
      <Button title='Submit' onPress={handleSubmit}/>
    </View>
  )
}

export default Login