import { StyleSheet, Text, View, Image, Button } from "react-native";
import React, {useState} from "react";
import { styles } from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImage = require("../assets/me.jpg");
  const [name, setName] = useState("Pheeranat Ratchatavarah");
  const [profile, setProfile] = useState(profileImage);
  const handleChangeName = () => setName("New name");
  const handleChangeImage = () => setProfile(profileImage);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={profileImage} />
        <Text style={styles.profileName}>Pheeranat Ratchatavarah</Text>
        <View>
        <Button
            title="change name"
            color="#841584"
            onPress={handleChangeName}
          />
          <Text>{" \n"}</Text>
          <Button
            title="chane image"
            color="#841584"
            onPress={handleChangeImage}
          />
        </View>  
      </View>
    </View>
  );
};

export default ProfileScreen;



