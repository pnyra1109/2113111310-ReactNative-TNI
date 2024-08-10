import { View, Text, TextInput ,Button, Alert} from 'react-native';
import React, {useState} from 'react';
import { styles,stylesPractice,stylesLogin } from '../styles/styles';

const Login = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = () => {
      if (username === "" && email === "") {
        Alert.alert("Alert", "Please Enter Name\nPlease Enter Email");
      } else if (username === "") {
        Alert.alert("Alert", "Please Enter Name"),[{text:"OK"}];
      } else if (email === "") {
        Alert.alert("Alert", "Please Enter Email",[{text:"OK"}]);
      } else {
        Alert.alert("Alert", "Success",[{text:"OK"}]);
      }
    };
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
      <Button title='Submit' onPress={handleSubmit}/>
    </View>
  )
}

export default Login