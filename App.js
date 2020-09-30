import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootStackScreen from "./screens/RootStackScreen";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <RootStackScreen />
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
