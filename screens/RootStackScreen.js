import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";
import FifthScreen from "./FifthScreen";
import SixthScreen from "./SixthScreen";
import SeventhScreen from "./SeventhScreen";
import EighthScreen from "./EighthScreen";
import NinethScreen from "./NinethScreen";
import TenthScreen from "./TenthScreen";
import ElevenScreen from "./ElevenScreen";
import TwelvScreen from "./TwelveScreen";
import ThirteenScreen from "./ThirteenScreen";
import FourteenScreen from "./FourteenScreen";
import FifteenScreen from "./FifteenScreen";
import SixteenScreen from "./SixteenScreen";
import SeventeenScreen from "./SeventeenScreen";

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
      <RootStack.Screen name="Fifth" component={FifthScreen} />
      <RootStack.Screen name="Sixth" component={SixthScreen} />
      <RootStack.Screen name="Seventh" component={SeventhScreen} />
      <RootStack.Screen name="Eighth" component={EighthScreen} />
      <RootStack.Screen name="Nineth" component={NinethScreen} />
      <RootStack.Screen name="Tenth" component={TenthScreen} />
      <RootStack.Screen name="Eleven" component={ElevenScreen} />
      <RootStack.Screen name="Twelve" component={TwelvScreen} />
      <RootStack.Screen name="Thirteen" component={ThirteenScreen} />
      <RootStack.Screen name="Fourteen" component={FourteenScreen} />
      <RootStack.Screen name="Fifteen" component={FifteenScreen} />
      <RootStack.Screen name="Sixteen" component={SixteenScreen} />
      <RootStack.Screen name="Seventeen" component={SeventeenScreen} />
    </RootStack.Navigator>
  );
};
export default RootStackScreen;
