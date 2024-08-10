import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";
import FlatlistExample from "./components/FlatlistExample";
import FlatlistBackend from "./components/FlatlistBackend";
import NewsApp from "./components/NewsApp";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <FlatlistExample/>  */}
      {/* <ProfileScreen/> */}
      {/* <Login/> */}
      <FlatlistBackend/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
