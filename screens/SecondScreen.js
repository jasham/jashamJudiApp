import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { GradientColors } from "../components/LinearGradient";
import { ScrollView } from "react-native-gesture-handler";

const SecondScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#ededed" }}>
      <Header colors={GradientColors.SecondScreen} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Third")}
        style={styles.ButtonWrapper}
      >
        <LinearGradient
          colors={GradientColors.FirstScreen}
          style={styles.Button}
        >
          <Text style={styles.BtnText}>العروض</Text>
          <View
            style={{
              width: 33,
              height: 33,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 33 / 2,
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
          colors={GradientColors.FirstScreen}
          style={styles.Button}
        >
          <Text style={styles.BtnText}>المفضلة</Text>
          <AntDesign name="hearto" size={30} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.LargeBtnWrapper}>
          <LinearGradient
            style={styles.LargeBtn}
            colors={GradientColors.SecondScreen}
          >
            <Text style={{ fontSize: 30, color: "#fff" }}>سوبر مارکت</Text>
          </LinearGradient>
          <LinearGradient
            style={styles.LargeBtn}
            colors={GradientColors.SecondScreen}
          >
            <Text style={{ fontSize: 30, color: "#fff" }}> هايبر ماركت</Text>
          </LinearGradient>
          <LinearGradient
            style={styles.LargeBtn}
            colors={GradientColors.SecondScreen}
          >
            <Text style={{ fontSize: 30, color: "#fff" }}>ميني مارکت </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default SecondScreen;

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
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 17,

    justifyContent: "space-around",
    paddingHorizontal: 50,
  },
  LargeBtn: {
    height: 80,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 17,
    // flexDirection: "row",
    justifyContent: "center",
  },
});
