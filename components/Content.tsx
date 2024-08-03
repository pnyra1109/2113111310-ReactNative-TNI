import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type ContentProps = {
    Message: string;
    fullname: string;
}

const Content = ({Message,fullname}:ContentProps) => {

    const [displayFullname,setDisplayFullname] = React.useState('');
    const handleButton = () => {
        setDisplayFullname(fullname)
        Alert.alert("Hello",`Input your Fullname : ${fullname}`);
    };

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{Message}</Text>
      <Text style={stylesPractice.text}>{displayFullname}</Text>
      <Button title="Click Me" onPress={handleButton}/>
    </View>
  );
};

export default Content;


