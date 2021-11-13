import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, SafeAreaView } from "react-native";

import Navigation from "./navigation";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
      <StatusBar hidden />
    </SafeAreaView>
  );
};

export default App;
