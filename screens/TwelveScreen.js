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

const TwelveScreen = ({ navigation }) => {
  const DATA = [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/12/Liocarcinus_vernalis.jpg",
      color: "orange",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYaXcdJX2V_zyBlKrt_AJYWQzWM8VpIHNN1Q&usqp=CAU",
      color: "red",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZsdwN7iyh2jjJOAxxwCI1wzTttUhfFMtdaA&usqp=CAU",
      color: "green",
    },

    {
      imageUrl:
        "https://snappygoat.com/b/fbf29a74883b71582001fd8fb889c92cbd1e017a",
      color: "orange",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require("../assets/blue.jpg")}
      >
        <TransparentHeader />
        <View style={styles.ButtonWrapper}>
          <TouchableOpacity
            style={{ width: "40%" }}
            onPress={() => navigation.navigate("Thirteen")}
          >
            <LinearGradient
              style={{ ...styles.Button, width: "100%" }}
              colors={GradientColors.PercentButton}
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
              colors={GradientColors.PercentButton}
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
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <AntDesign
                      name="hearto"
                      size={20}
                      color="black"
                      style={{
                        alignSelf: "flex-start",
                        marginLeft: 10,
                        marginTop: 5,
                      }}
                    />

                    <Text
                      style={{
                        fontSize: 20,
                        color: item.color,
                        alignSelf: "flex-end",
                        marginRight: 5,
                      }}
                    >
                      هامور كشر
                    </Text>
                  </View>

                  <Image
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                    source={{
                      uri:
                        "https://upload.wikimedia.org/wikipedia/commons/0/03/Illustration_from_The_Natural_History_of_British_Fishes_%281802%29_by_Edward_Donovan%2C_digitally_enhanced_by_rawpixel-com_12.jpg",
                    }}
                  />
                  <LinearGradient
                    colors={GradientColors.SecondScreen}
                    style={{ borderRadius: 30, marginBottom: 5 }}
                  >
                    <TouchableOpacity
                      style={{
                        // backgroundColor: "red",
                        width: 130,
                        //height: 40,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20,
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 20 }}>
                        {" "}
                        ٥ريال{"   "} كيلو
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                  <LinearGradient
                    colors={GradientColors.PercentButton}
                    style={{ borderRadius: 30 }}
                  >
                    <TouchableOpacity
                      style={{
                        // backgroundColor: "red",
                        width: 130,
                        //height: 40,
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        borderRadius: 20,
                        paddingHorizontal: 10,
                      }}
                    >
                      <Text style={{ color: "white", fontSize: 20 }}>-</Text>
                      <Text style={{ color: "white", fontSize: 20 }}>1</Text>
                      <Text style={{ color: "white", fontSize: 20 }}>+</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              );
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default TwelveScreen;

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
    marginBottom: 20,
    paddingBottom: 10,
    //backgroundColor: "transparent",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 12,
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
