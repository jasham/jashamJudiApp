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
import TransparentHeader from "../components/TransparentHeader";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo } from "@expo/vector-icons";

const NinethScreen = ({ navigation }) => {
  const DATA = [
    {
      title: "الحجم",
      imageUrl: require("../assets/seventh1.png"),
      btnText: "صغير(.٩٥)",
      symbol: "v",
    },
    {
      title: "التقطيع",
      imageUrl: require("../assets/seventh2.png"),
      btnText: "ثلاجة",
      symbol: "v",
    },
    {
      title: "الكمية",
      imageUrl: require("../assets/seventh3.png"),
      btnText: "-         1        +",
    },
    {
      title: "السعر",
      imageUrl: require("../assets/seventh4.png"),
      btnText: "ريال",
      symbol: "(٩٥.)",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        resizeMode="cover"
        source={require("../assets/brown.jpg")}
      >
        <TransparentHeader />
        <View style={styles.ButtonWrapper}>
          <LinearGradient
            style={{ borderRadius: 20, width: "50%" }}
            colors={["#db2539", "#db2539"]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Tenth")}
              style={{
                width: "100%",
                alignSelf: "center",
                paddingHorizontal: 10,

                marginTop: 10,
                marginBottom: 10,
                justifyContent: "center",
                alignItems: "center",
                // marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>
                {" "}
                اسم المنتج نعيمي{" "}
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 120, height: 80 }}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/4/4b/Soay_ewe.jpg",
              }}
            />
            <Entypo
              name="cross"
              size={30}
              color="red"
              style={{ justifyContent: "flex-start", alignSelf: "flex-start" }}
            />
          </View>
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
                      width: 140,
                      height: 80,
                      resizeMode: "contain",
                      marginTop: 10,
                    }}
                    source={item.imageUrl}
                  />
                  <Text
                    style={{
                      fontSize: 20,
                      //   position: "absolute",
                      //   bottom: 60,
                      color: "red",
                      fontSize: 30,
                    }}
                  >
                    {item.title}
                  </Text>
                  <LinearGradient
                    colors={["#db2539", "#db2539"]}
                    style={{ borderRadius: 30 }}
                  >
                    <TouchableOpacity
                      style={{
                        // backgroundColor: "red",
                        width: 130,
                        height: 40,
                        justifyContent: "space-around",
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 20,
                      }}
                    >
                      <Text style={{ color: "#fff", fontSize: 20 }}>
                        {" "}
                        {item.btnText}
                      </Text>
                      <Text style={{ color: "#fff", fontSize: 20 }}>
                        {" "}
                        {item.symbol}
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              );
            }}
          />
        </View>
        <TouchableOpacity style={{ width: "50%", alignSelf: "center" }}>
          <LinearGradient
            style={{
              width: "100%",
              alignSelf: "center",
              paddingVertical: 10,
              borderRadius: 20,
              marginTop: 10,
              marginBottom: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            colors={["#db2539", "#db2539"]}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>خیرات إضافية </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default NinethScreen;

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
