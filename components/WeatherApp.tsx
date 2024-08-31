import { StyleSheet, Text, View , Alert, Modal, Pressable} from 'react-native'
import React,{useState} from 'react'
import { stylesWeatherApp } from '../styles/styles'
import WeatherLondon from './WeatherLondon'
import WeatherBangkok from './WeatherBangkok'

const WeatherApp = () => {

    const [modalLondanVisibla,setModalLondanVisibla] = useState(false);
    const [modalBangkokVisibla,setModalBangkokVisibla] = useState(false);
  return (
    <View style = {stylesWeatherApp.container}>
      <Text style = {stylesWeatherApp.title}>Weather App</Text>
      <Pressable
      style = {stylesWeatherApp.button}
      onPress={()=>setModalLondanVisibla(true)}>
      <Text style = {stylesWeatherApp.buttonText}>London</Text>
      </Pressable>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalLondanVisibla}
      onRequestClose={()=>setModalLondanVisibla(!modalLondanVisibla)}
      >
      <View style = {[stylesWeatherApp.modalContainer,stylesWeatherApp.modalBackground]}>
        <WeatherLondon/>
        <Pressable 
            style = {stylesWeatherApp.closeButton}
            onPress={()=>setModalLondanVisibla(!modalLondanVisibla)}
            >
                <Text style = {stylesWeatherApp.buttonText}>Close</Text>
            </Pressable>
      </View>
      </Modal>
      <Pressable
      style = {stylesWeatherApp.button}
      onPress={()=>setModalBangkokVisibla(true)}>
      <Text style = {stylesWeatherApp.buttonText}>Bangkok</Text>
      </Pressable>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalBangkokVisibla}
      onRequestClose={()=>setModalBangkokVisibla(!modalBangkokVisibla)}
      style = {stylesWeatherApp.modalBackground}
      >
      <View style = {[stylesWeatherApp.modalContainer,stylesWeatherApp.modalBackground]}>
        <WeatherBangkok/>
        <Pressable 
            style = {stylesWeatherApp.closeButton}
            onPress={()=>setModalBangkokVisibla(!modalBangkokVisibla)}
            >
                <Text style = {stylesWeatherApp.buttonText}>Close</Text>
            </Pressable>
      </View>
      </Modal>
    </View>
  )
}

export default WeatherApp

const styles = StyleSheet.create({})