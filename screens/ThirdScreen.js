import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import TransparentHeader from "../components/TransparentHeader";
import { LinearGradient } from "expo-linear-gradient";
import { GradientColors } from "../components/LinearGradient";

const ThirdScreen = ({ navigation }) => {
  const DATA = ["آنانس", "آنانس", "آنانس", "آنانس", "آنانس", "آنانس"];
  return (
    <View style={{ flex: 1, backgroundColor: "#ededed" }}>
      <ImageBackground
        style={{ flex: 1, maxHeight: 160 }}
        source={require("../assets/green.jpg")}
      >
        <TransparentHeader />
      </ImageBackground>
      {/* <Header colors={GradientColors.ThirdScreen} /> */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Fourth")}
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
      <View style={styles.LargeBtnWrapper}>
        <FlatList
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-evenly" }}
          keyExtractor={(item, index) => index.toString()}
          data={DATA}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.LargeBtn}>
                <AntDesign
                  name="hearto"
                  size={20}
                  color="black"
                  style={{ alignSelf: "flex-start", marginLeft: 5 }}
                />
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{
                    uri:
                      "https://img.freepik.com/free-photo/lemon-with-leaves-white-background_73289-47.jpg?size=338&ext=jpg",
                  }}
                />

                <Text
                  style={{
                    fontSize: 30,
                    color: "orange",
                    alignSelf: "flex-end",
                    marginRight: 5,
                  }}
                >
                  {item}
                </Text>
              </View>
            );
          }}
        />
      </View>
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
    fontSize: 20,
    color: "#fff",
  },
  LargeBtnWrapper: {
    flex: 1,
    alignSelf: "center",
    width: "100%",

    marginTop: 17,
  },
  LargeBtn: {
    height: 170,
    width: "40%",
    marginBottom: 20,

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
