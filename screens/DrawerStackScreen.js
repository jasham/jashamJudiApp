import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScreen } from "./DrawerScreen";
import RootStackScreen from "./RootStackScreen";
import { StatusBar } from "expo-status-bar";

const Drawer = createDrawerNavigator();

const DrawerStack = ({ navigation, route }) => {
  return (
    <>
      <StatusBar hidden style="light" />
      <Drawer.Navigator
        drawerStyle={{
          //width: 70,
          position: "absolute",
          top: 80,
          borderBottomLeftRadius: 20,
          borderTopLeftRadius: 20,
          borderWidth: 2,
          borderColor: "white",
        }}
        drawerPosition={"right"}
        drawerContent={(props) => <DrawerContentScreen {...props} />}
      >
        <Drawer.Screen name="Home" component={RootStackScreen} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerStack;
