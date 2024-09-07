import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header, ListItem, Icon } from "@rneui/base";



const MenuScreen = (props: any) => {
  return (
    <View>
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          text: "Thai Nichi",
          style: { color: "#fff" },
        }}
        centerContainerStyle={{}}
        containerStyle={{ width: "100%", height: 200 }}
      />
      <>
        <ListItem
        bottomDivider
        onPress={()=>{props.navigation.navigate('Home')}}>
          <Icon name="home" type="material-community" color="grey" />
          <ListItem.Content>
            <ListItem.Title>หน้าหลัก</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem
        bottomDivider
        onPress={()=>{props.navigation.navigate('Product')}}>
          <Icon
            name="star"
            type="material-community"
            color="grey"
          />
          <ListItem.Content>
            <ListItem.Title>สินค้า</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </>
    </View>
  );
};

export default MenuScreen;
