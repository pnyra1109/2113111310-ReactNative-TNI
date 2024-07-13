import { StyleSheet, Text, View } from "react-native";
import React from "react";

type HeaderProps = {
  title: string;
  year?: number;
};

const Header = ({ title, year }: HeaderProps): React.JSX.Element => {
  return (
    <View>
      <Text>
        {title} {year && year + 543}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
