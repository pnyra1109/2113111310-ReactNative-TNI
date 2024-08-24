import { StyleSheet, Text, View ,FlatList,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import { stylesAxios } from '../styles/styles'
import axios from 'axios'

//Define type for the data structure
type User = {
    id:number;
    name:string;
    email:string;
};

const AxiosgetData = ():React.JSX.Element => {
  const [users,SetUsers] = useState<User[]>([]);
  const [loading,SetLoading] = useState<boolean>(true);
  const [error,SetError] = useState<string|null>(null);
  
  //get data by axios
  const fetchData = async()=>{
    try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
        SetUsers(response.data)
    } catch {
        SetError('Failed to fetch users')
    } finally{
        SetLoading(false)
    }
  } //end fetchData
  useEffect(()=>{
    fetchData();
  },[])
  if(loading){
    return(
        <View style={stylesAxios.centered}>
            <ActivityIndicator size="large" color="#0000ff"/>
        </View>
    );
  }
  if(error){
    <View style={stylesAxios.centered}>
        <Text style={stylesAxios.errorText}>{error}</Text>
    </View>
  }
    return (
        <FlatList
            contentContainerStyle = {stylesAxios.container}
            data={users}
            renderItem={({item})=>(
                <View style={stylesAxios.item}>
                    <Text style={stylesAxios.name}>{item.name}</Text>
                    <Text style={stylesAxios.email}>{item.email}</Text>
                </View>
            )}
            keyExtractor={item=>item.id.toString()}
        />
  )
}

export default AxiosgetData

const styles = StyleSheet.create({})
