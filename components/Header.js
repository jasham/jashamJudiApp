import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Feather,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
export default function Header(props) {
  return (
    <LinearGradient style={styles.container} colors={props.colors}>
      <View style={styles.InnerWrapper}>
        <View style={styles.IconWrapper}>
          <View style={styles.Icon}>
            <Feather name="search" size={35} color="#fff" />
            <Text style={styles.Text}>البحص</Text>
          </View>
          <View style={styles.Icon}>
            <FontAwesome5 name="hotel" size={35} color="#fff" />
            <Text style={styles.Text}>البحص</Text>
          </View>
          <View style={styles.Icon}>
            <FontAwesome5 name="home" size={35} color="#fff" />
            <Text style={styles.Text}>البحص</Text>
          </View>
          <View style={styles.Icon}>
            <Feather name="shopping-bag" size={35} color="#fff" />
            <Text style={styles.Text}>البحص</Text>
            <MaterialIcons
              name="error"
              size={20}
              color="red"
              style={{ position: "absolute", right: 5 }}
            />
          </View>
          <View style={styles.Icon}>
            <AntDesign name="bars" size={50} color="#fff" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: props.elevation ? props.elevation : 2,
              shadowOffset: { width: 4, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              width: 90,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 12,
            }}
          >
            <Text style={{ fontSize: 17 }}>البحص</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: props.elevation ? props.elevation : 2,
              shadowOffset: { width: 4, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              width: 90,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 12,
              marginLeft: 4,
            }}
          >
            <Text style={{ fontSize: 17 }}>البحص</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: props.elevation ? props.elevation : 2,
              shadowOffset: { width: 4, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              width: 90,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 12,
              marginLeft: 4,
            }}
          >
            <Text style={{ fontSize: 17 }}>البحص</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              elevation: props.elevation ? props.elevation : 2,
              shadowOffset: { width: 4, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
              width: 90,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 12,
              marginLeft: 4,
            }}
          >
            <Text style={{ fontSize: 17 }}>البحص</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  InnerWrapper: {
    flexDirection: "column",
  },
  IconWrapper: {
    padding: 5,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Icon: {
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "#fff",
    fontSize: 20,
  },
});
