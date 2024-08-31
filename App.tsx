import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/Login";
import FlatlistExample from "./components/FlatlistExample";
import FlatlistBackend from "./components/FlatlistBackend";
import NewsApp from "./components/NewsApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiospostData from "./components/AxiospostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";
import ModelExample from "./components/ModelExample";
import WeatherApp from "./components/WeatherApp";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/* <AxiosgetData/> */}
      {/* <AxiospostData/> */}
      {/* <WeatherLondon/> */}
      {/* <WeatherBangkok/> */}
      {/* <ModelExample/> */}
      <WeatherApp/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
