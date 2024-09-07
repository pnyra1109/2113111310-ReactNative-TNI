import { View, Text, Button } from 'react-native'
import React from 'react'
import { stylesCreatePost } from '../styles/styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = ({navigation,route}:any):React.JSX.Element => {
  
  const gotoAbout = ()=>{
    navigation.navigate('About',{
      companyname: 'Thai Nichi Institute of tecnology',
      companyId: 100
    });
  };

  return (
    <View style={stylesCreatePost.container}>
      <MaterialIcon name="home" size={40} color='blue'/>
      <Text>HomeScreen</Text>
      <Button title="About us" onPress={gotoAbout}/>
      <View style = {stylesCreatePost.postContainer}>
        <Button title="Create Post" onPress={()=>navigation.navigate("CreatePost")}/>
        <Text style = {stylesCreatePost.postContent}>Post: {route.params?.post}</Text>
      </View>
      
    </View>
  )
}

export default HomeScreen