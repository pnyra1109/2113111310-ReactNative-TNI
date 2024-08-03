import { View, Text , Button } from "react-native";
import React, { useEffect, useState } from "react";

const UserEffectExample = () => {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  useEffect(() => {
    console.log("use Effect1 - Run after every render");
  });
  useEffect(() => {
    console.log("use Effect2 - Run only when count1 change");
  }, [count1]);
  useEffect(() => {
    console.log("use Effect3 - Run only ones after the first render");
  },[]);
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ marginTop: 50 }}>Count1: {count1}</Text>
      <Button title="Increment Count1" onPress={() => setcount1(count1 + 1)} />
      <Text>{"\n\n"}</Text>
      <Text>Count2: {count2}</Text>
      <Button title="Increment Count2" onPress={() => setcount2(count2 + 1)} />
    </View>
  );
};

export default UserEffectExample;
