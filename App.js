import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import DrawerStack from "./screens/DrawerStackScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" hidden />
      <NavigationContainer>
        <DrawerStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    resizeMode: "contain",
    position: "absolute",
    top: 0,
    left: 0,
  },
});
