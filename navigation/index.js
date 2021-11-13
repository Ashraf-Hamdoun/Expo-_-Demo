import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./RootNavigator";

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}