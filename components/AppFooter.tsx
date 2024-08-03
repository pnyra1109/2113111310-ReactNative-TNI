import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type AppFooter = {
  footerMessage: string;
}

const AppFooter = ({footerMessage}: AppFooter): React.JSX.Element => {
  const hello = "Hello TNI Footer";
  const hello2 = <Text>Hello JSX</Text>;
  const isLogin = true;
  return (
    <View style={stylesPractice.footer}>
      <Text>
        {footerMessage}
      </Text>
    </View>
  );
};

export default AppFooter;

