import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { GradientColors } from "../components/LinearGradient";
const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header colors={GradientColors.FirstScreen} />

      <TouchableOpacity
        onPress={() => navigation.navigate("Second")}
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
              style={{
                color: "rgba(0,0,0,0.4)",
                fontSize: 22,
                color: "#fff",
              }}
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
            colors={GradientColors.ThirdScreen}
          >
            <Text style={{ fontSize: 30, color: "white" }}> حلقة الخضار</Text>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/6/62/Orange_Slice.jpg",
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={styles.LargeBtn}
            colors={GradientColors.PercentButton}
          >
            <Text style={{ fontSize: 30, color: "white" }}> سوق السمك </Text>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRtr07ksDyJ2s9B8cWNjF9RfgKZtjPa_OhH6A&usqp=CAU",
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={styles.LargeBtn}
            colors={GradientColors.PinkButton}
          >
            <Text style={{ fontSize: 30, color: "white" }}> سوق اللحوم</Text>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
              source={{
                uri:
                  "https://i2.pickpik.com/photos/228/968/833/meat-food-eat-meat-cutting-preview.jpg",
              }}
            />
          </LinearGradient>
          <LinearGradient
            style={styles.LargeBtn}
            colors={GradientColors.YellowCard}
          >
            <Text style={{ fontSize: 30, color: "white" }}> متاجر</Text>
            <Image
              style={{
                width: 70,
                height: 70,
                resizeMode: "contain",
              }}
              source={{
                uri:
                  "https://cdn.pixabay.com/photo/2018/03/21/21/13/cart-3248227_1280.jpg",
              }}
            />
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    width: "100%",
    backgroundColor: "#ededed",
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
    paddingHorizontal: 10,
    marginTop: 17,

    //height: "50%",
    justifyContent: "space-between",
  },
  LargeBtn: {
    //height: 80,
    borderRadius: 20,
    marginBottom: 17,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
