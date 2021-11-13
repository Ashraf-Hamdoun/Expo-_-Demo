import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TestScreen = (props) => {
  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.title}>
        {props.title !== undefined ? props.title : "Test"} page
      </Text>
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
});
