import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { stylesWeather } from "../styles/styles";
import axios from "axios";

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
  currentDate: Date | null;
}
const formatDate = (date: Date|null):string=>{
    if(!date) return'';
    const options:Intl.DateTimeFormatOptions={
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('th-TH',options);
};

const WeatherBangkok = (): React.JSX.Element => {
  const [state, setState] = useState<WeatherState>({
    data: null,
    loading: true,
    error: null,
    currentDate: new Date(),
  });
  const fetchWeatherData = async () => {
    const API_KEY = "d78aaab2d84844433d115114fb3bb62e";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=${API_KEY}&units=metric&lang=th`;
    try {
      const response = await axios.get(URL);
      setState({
        data: response.data,
        loading: false,
        error: null,
        currentDate: new Date(),
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: "Failed to fetch Weather Data",
        currentDate: null,
      });
    }
  };
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
      <Text style={stylesWeather.dateText}>{formatDate(state.currentDate)}</Text>
      <Text style={stylesWeather.cityName}>{state.data.name}</Text>
      <Text style={stylesWeather.temp}>{state.data.main.temp}</Text>
      <Text style={stylesWeather.weatherMain}>
        {state.data.weather[0].main}
      </Text>
      <Text style={stylesWeather.weatherDescription}>
        {state.data.weather[0].description}
      </Text>

      <FlatList
        data={[
          { key: "รู้สึกเหมือน", value: `${state.data.main.feels_like} C` },
          { key: "อุณหภูมิต่ำสุด", value: `${state.data.main.temp_min} C` },
          { key: "อุญหภูมิสูงสุด", value: `${state.data.main.temp_max} C` },
          { key: "ความชื้น", value: `${state.data.main.humidity} %` },
          { key: "ความกดอากาศ ", value: `${state.data.main.pressure} hPa` },
        ]}
        renderItem={({ item }) => (
          <View style={stylesWeather.detailContainer}>
            <Text style={stylesWeather.detailKey}>{item.key}</Text>
            <Text style={stylesWeather.detailValue}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default WeatherBangkok;

const styles = StyleSheet.create({});
