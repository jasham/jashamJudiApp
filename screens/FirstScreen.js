import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { GradientColors } from "../components/LinearGradient";
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" backgroundColor={"red"} /> */}
      <Header colors={GradientColors.FirstScreen} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Second")}
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
          colors={["#3bb866", "#3cb064", "#3cba68"]}
        >
          <Text style={{ fontSize: 30 }}>حلقتہ الخجار</Text>
          <Image
            style={{
              backgroundColor: "red",
              width: 70,
              height: 70,
              borderRadius: 200,
              marginLeft: 45,
              position: "absolute",
              right: 30,
            }}
            source={{
              uri:
                "https://new-img.patrika.com/upload/images/2015/09/15/1-nimbu-long-1442305886_766x502.jpg",
            }}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.LargeBtn}
          colors={["#c78e46", "#c9924b", "#cf9a55"]}
        >
          <Text style={{ fontSize: 30 }}>حلقتہ الخجار</Text>
          <Image
            style={{
              //backgroundColor: "red",
              width: 70,
              height: 70,
              //borderRadius: 200,
              marginLeft: 45,
              position: "absolute",
              right: 30,
            }}
            source={{
              uri:
                "https://cdn.shopify.com/s/files/1/1529/9657/articles/Blog_Post_Header_81.jpg?v=1579105473",
            }}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.LargeBtn}
          colors={["#e0609a", "#d9689b", "#e673a7"]}
        >
          <Text style={{ fontSize: 30 }}>حلقتہ الخجار</Text>
          <Image
            style={{
              backgroundColor: "red",
              width: 70,
              height: 70,
              borderRadius: 200,
              marginLeft: 45,
              position: "absolute",
              right: 30,
            }}
            source={{
              uri:
                "https://www.kenyanews.go.ke/wp-content/uploads/2018/12/meat-2.jpg",
            }}
          />
        </LinearGradient>
        <LinearGradient
          style={styles.LargeBtn}
          colors={["#dde673", "#cbd453", "#cbd453"]}
        >
          <Text style={{ fontSize: 30 }}>حلقتہ الخجار</Text>
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 200,
              marginLeft: 45,
              position: "absolute",
              right: 30,
            }}
            source={{
              uri:
                "https://cdn3.vectorstock.com/i/1000x1000/85/02/full-shopping-trolley-with-different-purchases-vector-14158502.jpg",
            }}
          />
        </LinearGradient>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    alignSelf: "center",
  },
  ButtonWrapper: {
    width: "100%",
    height: 90,
    // backgroundColor: "red",
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
    justifyContent: "space-between",
  },
  LargeBtn: {
    height: 80,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-around",
    paddingHorizontal: 70,
    paddingLeft: 100,
  },
});
