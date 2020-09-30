import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const HeartButton = (props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "green",
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
      >
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

export default HeartButton;

const styles = StyleSheet.create({});
