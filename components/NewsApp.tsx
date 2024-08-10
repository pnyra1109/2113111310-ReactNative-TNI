import { StyleSheet, Text, View , ActivityIndicator,FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { stylesNews } from "../styles/styles";

interface User {
  title: number;
  author: string;
  publishedAt: string;
  url:string;
}

const NewsApp = () => {
    const API_KEY = 'c6e4afcdff36447b989977b6d81a7546'; // ใส่ API Key ของนักศึกษาที่นี่
    const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  // set state get data from user and loading
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  //useEffect
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data.articles)
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  const _renderItem = ({item}:{item:User})=>(
    <View style={stylesNews.card}>
        <Text style={stylesNews.headline}>{item.title}</Text>
        <Text style={stylesNews.description}>{item.author}</Text>
        <Text style={stylesNews.date}>{item.publishedAt}</Text>
    </View>
)   
  return (
    <View style={stylesNews.container}>
      {loading?(
        <ActivityIndicator size="large" color="red"/>
      ):(
        <FlatList
            data ={data}
            renderItem ={_renderItem}
            keyExtractor={(item)=>item.url}
        />
      )

      }
    </View>
  );
};

export default NewsApp;

const styles = StyleSheet.create({});
