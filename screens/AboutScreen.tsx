import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import { stylesAboutScreen } from "../styles/styles";

const AboutScreen = ({route}:any): React.JSX.Element => {

  const {companyname,companyId} = route.params;

  return (
    <ImageBackground source={require('../assets/bg.png')} style = {stylesAboutScreen.bgImage}>
      <SafeAreaView>
        <Image
          source={require("../assets/building.png")}
          resizeMode="contain"
          style={stylesAboutScreen.myImage}
        />
        <Text>
          {companyname} {companyId}
        </Text>
        <Image
          source={{ uri: "https://codingthailand.com/site/img/camera.png" }}
          style={stylesAboutScreen.myImageNetwork}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
