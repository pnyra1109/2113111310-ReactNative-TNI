import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import UserEffectExample from "./components/UserEffectExample";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/*<ProfileScreen/>*/}
      <UserEffectExample/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
