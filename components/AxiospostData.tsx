import { StyleSheet, Text, View , Button, TextInput,Alert} from 'react-native'
import React,{useState,useEffect} from 'react'
import { stylesPostAxios } from '../styles/styles'
import axios from 'axios'

const AxiospostData = () => {

    const[formData,SetformData]=useState({name:"",email:""})

    const handleInputChange= (key:string,value:string) => {
        SetformData(prevState=>({...prevState,[key]:value}));
    };

    const handleSubmit = async()=>{
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users',formData);
            Alert.alert('User Created',`
                ID: ${response.data.id}
                Name: ${response.data.name}
                Email: ${response.data.email}
            `);
        } catch{
            Alert.alert('Error','Failed to create user');
        }
    }

  return (
    <View style={stylesPostAxios.container}>
            <TextInput
                style={stylesPostAxios.input}
                placeholder="Enter Name"
                value={formData.name}
                onChangeText={value => handleInputChange('name', value)}
            />
            <TextInput
                style={stylesPostAxios.input}
                placeholder="Enter Email"
                value={formData.email}
                onChangeText={value => handleInputChange('email', value)}
            />
            <Button title="Create User" onPress={handleSubmit} />
        </View>
  );
}

export default AxiospostData

const styles = StyleSheet.create({})