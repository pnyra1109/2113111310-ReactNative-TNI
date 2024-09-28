// Only import react-native-gesture-handler on native platforms
import "react-native-gesture-handler";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import MenuScreen from "./screens/MenuScreen";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatePostScreen from "./screens/CreatePostScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtonsProvider } from "react-navigation-header-buttons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import Toast from "react-native-toast-message";
import { Provider } from "react-redux";
import { store } from "./redux-toolkit/store";
import { useAppSelector, useAppDispatch } from "./redux-toolkit/hooks";
import {
  selectAuthState,
  setIsLoading,
  setIsLogin,
  setProfile,
} from "./auth/auth-sliec";
import { getProfile } from "./services/auth-servise";

const ProductStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const LoginStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerStyle:{backgroundColor:'#2302aa'},
        // headerTintColor:'white',
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        // options={{title:'หน้าหลัก'}}
      />
      <HomeStack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "เกี่ยวกับเรา",
          headerStyle: { backgroundColor: "#2302aa" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          //  headerTitleAlign:'center',
        }}
      />
      {/* <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/> */}
    </HomeStack.Navigator>
  );
}
function ProductStackScreen() {
  return (
    <ProductStack.Navigator
      initialRouteName="Product"
      screenOptions={{
        // headerStyle:{backgroundColor:'#2302aa'},
        // headerTintColor:'white',
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <ProductStack.Screen name="Product" component={ProductScreen} />
      {/* <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/> */}
    </ProductStack.Navigator>
  );
}
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        // headerStyle:{backgroundColor:'#2302aa'},
        // headerTintColor:'white',
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <LoginStack.Screen name="Login" component={LoginScreen} />
      {/* <HomeStack.Screen name='CreatePost' component={CreatePostScreen}/> */}
    </LoginStack.Navigator>
  );
}
const App = (): React.JSX.Element => {
  //ใช้ useAppSelector เพื่อดึง state จาก store
  const { isLogin, isLoading } = useAppSelector(selectAuthState);

  const dispatch = useAppDispatch();

  const checkLogin = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await getProfile();
      if (response?.data.user) {
        dispatch(setProfile(response.data.data.user));
        dispatch(setIsLogin(true));
      } else {
        dispatch(setIsLogin(false));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));  
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      checkLogin();
    }, [])
  );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
  return (
    <>
      <HeaderButtonsProvider stackType="native">
        {isLogin ? (
          <Drawer.Navigator
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <MenuScreen {...props} />}
          >
            <Drawer.Screen name="HomeStack" component={HomeStackScreen} />
            <Drawer.Screen name="Product" component={ProductStackScreen} />
          </Drawer.Navigator>
        ) : (
          <LoginStackScreen />
        )}
      </HeaderButtonsProvider>
      <Toast />
    </>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default AppWrapper;
