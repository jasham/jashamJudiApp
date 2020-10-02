import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";
import Header from "../components/Header";
import { GradientColors } from "../components/LinearGradient";

const FourteenScreen = (props) => {
  const DATA = ["الكل", "سوبر ماركت", "حلقة الخضار", "سوق السمك"];
  return (
    <View style={{ flex: 1, backgroundColor: "#ededed" }}>
      <Header colors={GradientColors.FirstScreen} />
      <View
        style={{
          width: "100%",

          height: "50%",
          alignSelf: "center",
          marginTop: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            width: "85%",
            height: "100%",
            resizeMode: "cover",
          }}
          source={require("../assets/14thmap.png")}
        />
      </View>
      <View style={{ width: "85%", alignSelf: "center" }}>
        <FlatList
          horizontal
          keyExtractor={(item, index) => index.toString()}
          data={DATA}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Fifteen")}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  elevation: props.elevation ? props.elevation : 5,
                  shadowOffset: { width: 4, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  minWidth: 70,
                  // height: 50,
                  paddingHorizontal: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 20,
                  marginRight: 5,
                  paddingVertical: 10,
                  marginBottom: 20,
                }}
              >
                <Text style={{ fontSize: 15 }}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity style={{ width: "70%", alignSelf: "center" }}>
        <LinearGradient
          style={{
            width: "100%",
            alignSelf: "center",
            paddingVertical: 10,
            borderRadius: 7,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
          colors={GradientColors.FirstScreen}
        >
          <Text style={{ fontSize: 20, color: "#fff" }}> استلمت طلبي </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default FourteenScreen;

const styles = StyleSheet.create({
  ButtonWrapper: {
    width: "100%",
    //height: 90,
    marginTop: 17,
    //paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
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
    fontSize: 27,
    color: "#fff",
  },
  LargeBtnWrapper: {
    flex: 1,
    alignSelf: "center",
    width: "100%",

    marginTop: 17,
  },
  LargeBtn: {
    minHeight: 170,
    width: "40%",
    marginBottom: 20,
    paddingBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 12,
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
