import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { GradientColors } from "../components/LinearGradient";

const SceoundScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header colors={GradientColors.SecondScreen} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Third")}
        style={styles.ButtonWrapper}
      >
        <LinearGradient
          colors={["#DE2E3B", "#E64440", "#EF5F46"]}
          style={styles.Button}
        >
          <Text style={styles.BtnText}>البحص</Text>
          <View
            style={{
              width: 33,
              height: 33,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 20,
              borderWidth: 1.4,
              border: "solid red",
              borderColor: "#fff",
            }}
          >
            <Text
              style={{ color: "rgba(0,0,0,0.4)", fontSize: 22, color: "#fff" }}
            >
              <FontAwesome5 name="percent" size={17} color="#fff" />
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#DE2E3B", "#E64440", "#EF5F46"]}
          style={styles.Button}
        >
          <Text style={styles.BtnText}>البحص</Text>
          <AntDesign name="hearto" size={30} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.LargeBtnWrapper}>
        <LinearGradient
          style={styles.LargeBtn}
          colors={["#122054", "#122054", "#122054"]}
        >
          <Text style={{ fontSize: 40, color: "#fff" }}>سوبر مارکت</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.LargeBtn}
          colors={["#122054", "#122054", "#122054"]}
        >
          <Text style={{ fontSize: 40, color: "#fff" }}>ہابیر مارکت</Text>
        </LinearGradient>
        <LinearGradient
          style={styles.LargeBtn}
          colors={["#122054", "#122054", "#122054"]}
        >
          <Text style={{ fontSize: 30, color: "#fff" }}>مینی مارکت </Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default SceoundScreen;

const styles = StyleSheet.create({
  ButtonWrapper: {
    width: "100%",
    height: 90,
    marginTop: 17,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Button: {
    width: "49%",
    height: 80,
    backgroundColor: "yellow",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 40,
    paddingHorizontal: 20,
  },
  BtnText: {
    fontSize: 20,
    color: "#fff",
  },
  LargeBtnWrapper: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10,
    marginTop: 17,
    height: "50%",
    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  LargeBtn: {
    height: 80,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
