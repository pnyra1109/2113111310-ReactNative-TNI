
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/styles";
import { useEffect, useState } from "react";



export default function App():React.JSX.Element {
  const [Fullname,setFullname] = useState('');
  const [message,setMessage] = useState('Message From App.tsx');
  const [footerMessage,setFootertMessage] = useState('Thai-Nichi Institute of Technology');

  useEffect(()=>{
    console.log("Components has mounted");
  },[]);
  useEffect(()=>{
    console.log(`Fullname has changed to : ${Fullname}`);
  },[Fullname]); //this will run whenever 'Fullname changes'

  const handleButtonClick=()=>{
    Alert.alert("Hello",`Input your Fullname : ${Fullname}`);
  };

  return (
    <View style={stylesPractice.container}>
      <AppHeader fullname={Fullname} messages={message}/>
      {/* <Content Message={message} fullname={Fullname}/> */}
      <Content Message={message} onButtonClick = {handleButtonClick}/>
      <TextInput
      style={stylesPractice.input}
      placeholder="Enter your fullname"
      value={Fullname}
      onChangeText={setFullname}
      />
      <AppFooter footerMessage={footerMessage}/>
    </View>
  );
}

