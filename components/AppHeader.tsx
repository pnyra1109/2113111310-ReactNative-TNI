import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type HeaderProps = {
  fullname: string;
  messages?: string;
};

const AppHeader = ({ fullname, messages }: HeaderProps): React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>    
      <Text style={stylesPractice.text}>
        Input your fullname: {fullname}
      </Text>
      <Text style={stylesPractice.text}>
        Message:{messages}
      </Text>
    </View>
  );
};

export default AppHeader;

