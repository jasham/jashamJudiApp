import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { GradientColors } from "./LinearGradient";
const HeartButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        style={{
          // backgroundColor: props.backgroundColor
          //   ? props.backgroundColor
          //   : "",
          height: 60,
          width: 80,
          borderTopLeftRadius: 80,

          borderTopRightRadius: 80,
          borderBottomLeftRadius: 150,
          borderBottomRightRadius: 150,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 20,
        }}
        colors={
          props.green ? GradientColors.ThirdScreen : ["#FFFFFF", "#FFFFFF"]
        }
      >
        <View
          style={{
            backgroundColor: "#ededed",
            position: "absolute",
            left: 25,
            top: -24,
            borderRadius: 17,
            width: 30,
            height: 30,
            transform: [{ scaleX: 1.3 }],
          }}
        >
          {props.image && (
            <Image
              source={require("../assets/green.jpg")}
              style={{ width: "100%", height: "100%", borderRadius: 200 }}
            />
          )}
        </View>
        {props.children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HeartButton;

const styles = StyleSheet.create({});
