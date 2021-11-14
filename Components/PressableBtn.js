import React from "react";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const PressableBtn = (props) => {
  return (
    <Pressable
      onPress={() => props.navigation.navigate("About")}
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
      })}
    >
      <FontAwesome
        name={props.icon}
        size={25}
        color={"red"}
        style={{ marginRight: 15 }}
      />
    </Pressable>
  );
};

export default PressableBtn;
