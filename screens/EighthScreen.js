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
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import TransparentHeader from "../components/TransparentHeader";
import { LinearGradient } from "expo-linear-gradient";
import { GradientColors } from "../components/LinearGradient";

const EighthScreen = ({ navigation }) => {
  const DATA = ["نعيمي", "عجل بلدي", "نعيمي", "حري", "نجدي", "حري"];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require("../assets/brown.jpg")}
      >
        <TransparentHeader />
        <View style={styles.ButtonWrapper}>
          <TouchableOpacity
            style={{ width: "40%" }}
            onPress={() => navigation.navigate("Nineth")}
          >
            <LinearGradient
              style={{ ...styles.Button, width: "100%" }}
              colors={GradientColors.PinkButton}
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
          </TouchableOpacity>
          <TouchableOpacity style={{ width: "40%" }}>
            <LinearGradient
              colors={GradientColors.PinkButton}
              style={{ ...styles.Button, width: "100%" }}
            >
              <Text style={styles.BtnText}>المفضلة</Text>
              <AntDesign name="hearto" size={30} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.LargeBtnWrapper}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-evenly" }}
            keyExtractor={(item, index) => index.toString()}
            data={DATA}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.LargeBtn}>
                  <Image
                    style={{
                      width: "100%",
                      height: 120,
                      resizeMode: "cover",
                    }}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1U42w-_Z40ptozuxCyuNg85aeDdkrZxLLCw&usqp=CAU",
                    }}
                  />
                  <View style={{ backgroundColor: "maroon", width: "100%" }}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "white",
                        alignSelf: "center",
                        //   marginRight: 5,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default EighthScreen;

const styles = StyleSheet.create({
  ButtonWrapper: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  Button: {
    paddingVertical: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  BtnText: {
    fontSize: 20,
    color: "#fff",
  },
  LargeBtnWrapper: {
    flex: 1,
    alignSelf: "center",
    width: "100%",

    marginTop: 20,
  },
  LargeBtn: {
    minHeight: 170,
    width: "40%",
    //marginBottom: 20,
    backgroundColor: "transparent",
    //backgroundColor: "yellow",
    borderRadius: 10,
    elevation: 12,
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
