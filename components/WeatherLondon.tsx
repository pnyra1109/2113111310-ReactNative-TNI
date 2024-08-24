import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { stylesWeather } from "../styles/styles";

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

const WeatherLondon = (): React.JSX.Element => {
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
  });
  const fetchWeatherData = async () => {
    const API_KEY = "d78aaab2d84844433d115114fb3bb62e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;
    try {
      const response = await axios.get(URL);
      setState({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "Failed to fetch Weather Data",
      });
    }};
    useEffect(() => {
      fetchWeatherData();
    }, []);
    if (state.loading) {
      return (
        <View style={stylesWeather.centeredContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    if (state.error) {
      <View style={stylesWeather.centeredContainer}>
        <Text style={stylesWeather.errorText}>{state.error}</Text>
      </View>;
    }
  
  return (
    <View style={stylesWeather.container}>
        <Text style={stylesWeather.cityName}>{state.data.name}</Text>
        <Text style={stylesWeather.temp}>{state.data.main.temp}</Text>
        <Text style={stylesWeather.weatherMain}>{state.data.weather[0].main}</Text>
        <Text style={stylesWeather.weatherDescription}>{state.data.weather[0].description}</Text>

    <FlatList
        data={[
            {key:'Feel like',value:`${state.data.main.feel_like} C`},
            {key:'Min Temp',value:`${state.data.main.temp_min} C`},
            {key:'Max Temp',value:`${state.data.main.temp_max} C`},
            {key:'Humidity',value:`${state.data.main.humidity} %`},
            {key:'Pressure',value:`${state.data.main.pressure} hPa`},
        ]}
        renderItem={({item})=>(
            <View style = {stylesWeather.detailContainer}>
                <Text style={stylesWeather.detailKey}>{item.key}</Text>
                <Text style={stylesWeather.detailValue}>{item.value}</Text>
            </View>
        )}
    />
    </View>
  );
};

export default WeatherLondon;

const styles = StyleSheet.create({});
