import { View, Button} from "react-native";
import React, { useLayoutEffect } from "react";
import { stylesCreatePost } from "../styles/styles";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
("@react-navigation/native");
import AppLogo from "../components/AppLogo";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

import { useAppDispatch, useAppSelector } from "../redux-toolkit/hooks";
import { selectAuthState, setIsLogin } from "../auth/auth-sliec";
import { logout } from "../services/auth-servise";
import {Text} from '@rneui/base'; // ใช้companent Text จาก React Native Base


const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const HomeScreen = (): React.JSX.Element => {
  
  const navigation = useNavigation<any>();
  const dispatch =useAppDispatch();
  const {profile} = useAppSelector(selectAuthState);

  console.log(profile);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              // Alert.alert("Open Menu", "Hello React Native");
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="logout"
            iconName="logout"
            onPress={async() => {
              await logout();
              dispatch(setIsLogin(false));
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const gotoAbout = () => {
    navigation.navigate("About", {
      companyname: "Thai Nichi Institute of tecnology",
      companyId: 100,
    });
  };

  return (
    <View style={stylesCreatePost.container}>
      <MaterialIcon name="home" size={40} color="blue" />
      {profile?(
        <>
          <Text h3> Welcome {profile.name}</Text>
          <Text> Email:{profile.eamail} ID:{profile.id} Role: {profile.role}</Text>
        </>
      ):null}
      <Button title="About us" onPress={gotoAbout} />
    </View>
  );
};

export default HomeScreen;
