import { View, Text, TextInput ,Button } from 'react-native';
import React, {useState} from 'react';
import { styles,stylesPractice,stylesLogin } from '../styles/styles';

const Login = () => {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
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
      <Button title='Submit'/>
    </View>
  )
}

export default Login