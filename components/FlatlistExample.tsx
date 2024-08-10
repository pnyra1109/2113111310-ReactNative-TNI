import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import { stylesFlat } from '../styles/styles'

interface UserItem{
    id:string;
    name:string;
    email:string;
}

const FlatlistExample = ():React.JSX.Element => {

    const user: UserItem[] = [
        { id: '1', name: 'Alice', email: 'alice@example.com' },
        { id: '2', name: 'Bob', email: 'bob@example.com' },
        { id: '3', name: 'Cara', email: 'cara@example.com' }
      ];
    // Create Function _renderItem
    const _renderItem = ({item}:{item:UserItem})=>(
        <View style={stylesFlat.item}>
            <Text style={stylesFlat.name}>{item.name}</Text>
            <Text style={stylesFlat.email}>{item.email}</Text>
        </View>
    )
  return (
    <View style={stylesFlat.container}>
      <FlatList
        data = {user} //setdatatoFlatList
        renderItem={_renderItem}//CreateFunction
        keyExtractor={(item)=>item.id} //setKeytoanyitem
      />
    </View>
  )
}

export default FlatlistExample

const styles = StyleSheet.create({})