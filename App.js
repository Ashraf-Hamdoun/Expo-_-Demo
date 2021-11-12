import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>
        {"Wolcome to Expo project!\n" + counter}
      </Text>
      <TouchableHighlight
        style={styles.btnRound}
        onPress={() => {
          let value = counter + 1;
          setCounter(value);
        }}
      >
        <Text style={styles.appTitle}>Press</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
