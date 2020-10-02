import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { GradientColors } from "../components/LinearGradient";
const SeventeenScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header colors={GradientColors.FirstScreen} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 25 }}>تمت عملية الدفع بنجاح!</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#db2539",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 4,
            marginTop: 10,
            shadowColor: "black",
            shadowOffset: { width: 4, height: 5 },
            elevation: 8,
            shadowRadius: 4,
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>تتبع مشترياتي</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SeventeenScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "#ededed",
    alignSelf: "center",
  },
});
