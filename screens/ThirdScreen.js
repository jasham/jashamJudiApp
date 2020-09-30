import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Header from "../components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { GradientColors } from "../components/LinearGradient";

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.3)" }}>
      <Header colors={GradientColors.ThirdScreen} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Fourth")}
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
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.LargeBtnWrapper}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.LargeBtn}>
              <Text
                style={{
                  fontSize: 30,
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  color: "orange",
                }}
              >
                آنانس
              </Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://img.freepik.com/free-photo/lemon-with-leaves-white-background_73289-47.jpg?size=338&ext=jpg",
                }}
              />
              <AntDesign
                style={{ position: "absolute", top: 10, left: 10 }}
                name="hearto"
                size={20}
                color="black"
              />
            </View>
            <View style={styles.LargeBtn}>
              <Text
                style={{
                  fontSize: 30,
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  color: "orange",
                }}
              >
                آنانس
              </Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://img.freepik.com/free-photo/lemon-with-leaves-white-background_73289-47.jpg?size=338&ext=jpg",
                }}
              />
              <AntDesign
                style={{ position: "absolute", top: 10, left: 10 }}
                name="hearto"
                size={20}
                color="black"
              />
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={styles.LargeBtn}>
              <Text
                style={{
                  fontSize: 30,
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  color: "orange",
                }}
              >
                آنانس
              </Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://img.freepik.com/free-photo/lemon-with-leaves-white-background_73289-47.jpg?size=338&ext=jpg",
                }}
              />
              <AntDesign
                style={{ position: "absolute", top: 10, left: 10 }}
                name="hearto"
                size={20}
                color="black"
              />
            </View>
            <View style={styles.LargeBtn}>
              <Text
                style={{
                  fontSize: 30,
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  color: "orange",
                }}
              >
                آنانس
              </Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://img.freepik.com/free-photo/lemon-with-leaves-white-background_73289-47.jpg?size=338&ext=jpg",
                }}
              />
              <AntDesign
                style={{ position: "absolute", top: 10, left: 10 }}
                name="hearto"
                size={20}
                color="black"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 20,
            }}
          >
            <View style={styles.LargeBtn}>
              <Text
                style={{
                  fontSize: 30,
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  color: "orange",
                }}
              >
                آنانس
              </Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://img.freepik.com/free-photo/lemon-with-leaves-white-background_73289-47.jpg?size=338&ext=jpg",
                }}
              />
              <AntDesign
                style={{ position: "absolute", top: 10, left: 10 }}
                name="hearto"
                size={20}
                color="black"
              />
            </View>
            <View style={styles.LargeBtn}>
              <Text
                style={{
                  fontSize: 30,
                  position: "absolute",
                  bottom: 10,
                  right: 10,
                  color: "orange",
                }}
              >
                آنانس
              </Text>
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri:
                    "https://img.freepik.com/free-photo/lemon-with-leaves-white-background_73289-47.jpg?size=338&ext=jpg",
                }}
              />
              <AntDesign
                style={{ position: "absolute", top: 10, left: 10 }}
                name="hearto"
                size={20}
                color="black"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ThirdScreen;

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
    fontSize: 27,
    color: "#fff",
  },
  LargeBtnWrapper: {
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 10,
    marginTop: 17,
    height: "100%",
    justifyContent: "space-around",
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  LargeBtn: {
    height: 170,
    width: 170,
    flexDirection: "row",
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
