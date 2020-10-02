import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
          borderTopLeftRadius: 50,

          borderTopRightRadius: 50,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginVertical: 20,
        }}
        colors={
          props.green ? GradientColors.ThirdScreen : ["#FFFFFF", "#FFFFFF"]
        }
      >
        {props.children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HeartButton;

const styles = StyleSheet.create({});
