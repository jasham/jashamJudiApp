import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

export const ShadowCard = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 4,
        padding: 15,
        paddingVertical: props.pVertical,
        minHeight: 50,
        minWidth: 50,
        elevation: 2,
        shadowColor: "black",
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        width: props.width,
        height: props.height,
        marginTop: props.mTop,
        marginBottom: props.mBot,
      }}
    >
      {props.children}
    </View>
  );
};

export const ShadowCardWithoutPadding = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 4,
        minHeight: 50,
        minWidth: 50,
        elevation: 3,
        shadowColor: "black",
        shadowOffset: { width: 4, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        width: props.width,
        height: props.height,
        marginTop: props.mTop,
        paddingVertical: 15,
      }}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({});
