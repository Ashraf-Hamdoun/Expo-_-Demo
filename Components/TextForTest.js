import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TextForTest = (props) => {
  return (
    <View style={styles.screenWrapper}>
      <Text style={styles.title}>
        {props.title !== undefined ? props.title : "Test"} page
      </Text>
      <Text style={styles.pragraphe}>
        Lorem ipsum dolor sit amet, vidit bonorum ullamcorper sit ei. Porro
        malis delicata id sea. Esse novum tantas nam ne, ne ullum interesset
        sadipscing qui. Cum ferri lorem discere at. Graeco consequuntur ei his.
      </Text>
    </View>
  );
};

export default TextForTest;

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  pragraphe: {
    fontSize: 18,
    textAlign: "center",
    width: "90%",
    marginTop: 10,
  },
});
