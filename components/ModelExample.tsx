import { StyleSheet, Text, View,Alert,Modal,Pressable } from 'react-native'
import React,{useState} from 'react'
import { stylesModel } from '../styles/styles'

const ModelExample = ():React.JSX.Element => {

  const [modalVisible,setModalVisible] = useState(false);

  return (
    <View style = {stylesModel.centeredView}>
      <Pressable 
      style = {[stylesModel.button,stylesModel.buttonOpen]}
      onPress={()=>setModalVisible(true)}
      >
      <Text style={stylesModel.textStyle}>Show Modal</Text>
      </Pressable>
      <Modal
      animationType="slide"
      transparent = {true}
      visible = {modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style = {stylesModel.modalView}>
            <Text style = {stylesModel.modalText}>Hello React Native</Text>
            <Pressable 
            style = {[stylesModel.button,stylesModel.buttonClose]}
            onPress={()=>setModalVisible(!modalVisible)}
            >
                <Text style = {stylesModel.textStyle}>Hide Modal</Text>
            </Pressable>
        </View>
      </Modal>
    </View>
  )
}

export default ModelExample

const styles = StyleSheet.create({})