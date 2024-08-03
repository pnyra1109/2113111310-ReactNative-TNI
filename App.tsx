import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";

const App = (): React.JSX.Element => {
  return (
    <View>
      <ProfileScreen/>
      <Login/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
