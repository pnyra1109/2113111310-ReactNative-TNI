import { View, Text, Button, Alert } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
("@react-navigation/native");
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = ():React.JSX.Element => {
  const navigation = useNavigation<any>();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
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
    });
  }, [navigation]);
  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  )
}

export default ProductScreen