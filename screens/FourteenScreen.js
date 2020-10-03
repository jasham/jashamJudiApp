import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { GradientColors } from "../components/LinearGradient";

const FourteenScreen = (props) => {
  const DATA = [
    "تم توصيل طلبك",
    "طلبك في الطريق ",
    " يتم تجهيز طلبك",
    "المندوب في الطريق للمتجر ",
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#ededed" }}>
      <Header colors={GradientColors.FirstScreen} />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            width: "100%",

            // height: "50%",
            alignSelf: "center",
            marginTop: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "85%",
              // height: "100%",
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
                    maxWidth: 100,
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
                  <Text style={{ fontSize: 12 }}>{item}</Text>
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
      </ScrollView>
    </View>
  );
};

export default FourteenScreen;
