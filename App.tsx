import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import Header from "./components/Header";

export default function App():React.JSX.Element {
  const onClickMe = ()=>{
    Alert.alert("Hi", "Hello React.js");
  }

  const users = [
    {id:1001,name:'John'},
    {id:1002,name:'Marry'}
  ]

  return (
    <View style={styles.container}>
      <Header title="This is Header" year={2018}/>
      <Header title="This is Header2"/>
      <Text>Hello React Native</Text>
      {users.map((data,index)=>{
        return(
          <Text key={data.id}>
            No. {index+1} ID: {data.id} Name: {data.name}
          </Text>
        )    
      })}
      <Button
        title="Click Me"
        onPress={onClickMe}
        color="green"
        /* onPress={() => {
          Alert.alert("Hi", "React Netive is Fun");
        }} */
      />
      <AppFooter/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
