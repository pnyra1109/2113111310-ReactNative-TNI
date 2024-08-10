import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { stylesFlatBackend } from "../styles/styles";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatlistBackend = () => {
  // set state get data from user and loading
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  //useEffect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //Function _renderItem from use in FlatList
  const _renderItem = ({item}:{item:User})=>(
    <View style={stylesFlatBackend.item}>
        <Text style={stylesFlatBackend.name}>{item.name}</Text>
        <Text style={stylesFlatBackend.email}>{item.email}</Text>
    </View>
)   
  return (
    <View style={stylesFlatBackend.container}>
      {loading?(
        <ActivityIndicator size="large" color="red"/>
      ):(
        <FlatList
            data ={data}
            renderItem ={_renderItem}
            keyExtractor={(item)=>item.id.toString()}
        />
      )

      }
    </View>
  );
};

export default FlatlistBackend;

const styles = StyleSheet.create({});
