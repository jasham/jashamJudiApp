import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation, route }) => {
  return (
    <RootStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="First" component={FirstScreen} />
      <RootStack.Screen name="Second" component={SecondScreen} />
      <RootStack.Screen name="Third" component={ThirdScreen} />
      <RootStack.Screen name="Fourth" component={FourthScreen} />
    </RootStack.Navigator>
  );
};
export default RootStackScreen;
