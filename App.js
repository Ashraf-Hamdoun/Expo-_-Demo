import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./navigation";

const App = () => {
  const isLoadingComplete = true; //loading Data

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={{ flex: 1 }}>
        <Navigation />
        <StatusBar hidden />
      </SafeAreaProvider>
    );
  }
};

export default App;
