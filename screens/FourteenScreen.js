import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { GradientColors } from "../components/LinearGradient";

const FourteenScreen = (props) => {
  return (
    <View style={{ flex: 1, paddingBottom: 20 }}>
      <Header colors={GradientColors.FirstScreen} />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View
          style={{
            elevation: props.elevation ? props.elevation : 5,
            shadowOffset: { width: 4, height: 5 },
            shadowOpacity: 0.3,
            width: "90%",
            //height: "75%",
            alignSelf: "center",
            marginTop: 20,
            paddingHorizontal: 3,
            borderRadius: 5,
          }}
        >
          <TouchableOpacity style={{ width: "100%", alignSelf: "center" }}>
            <LinearGradient
              style={{
                width: "100%",
                alignSelf: "center",
                paddingVertical: 10,
                borderRadius: 7,
                //   marginBottom: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              colors={GradientColors.SecondScreen}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>عنوان التوصيل</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              width: "100%",
              // backgroundColor: "red",
              //height: "45%",
              alignSelf: "center",
              // marginTop: 35,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Image
              style={{ width: 300, height: 250, resizeMode: "cover" }}
              source={require("../assets/14thmap.png")}
            />
          </View>
          <Text style={{ fontSize: 15, paddingVertical: 5, paddingRight: 20 }}>
            التوصيل إلى:
          </Text>
          <Text style={{ fontSize: 15, paddingVertical: 5, paddingRight: 20 }}>
            مستشفى الملك عبد العزيز
          </Text>
          <TextInput
            placeholder="اضف معلومات التوصيل )اختياري"
            numberOfLines={7}
            multiline
            textAlignVertical="top"
            style={{
              minHeight: 20,
              width: "90%",
              borderWidth: 0.3,
              alignSelf: "center",
              borderTopColor: "gray",
              borderRadius: 5,
              textAlign: "right",
              paddingHorizontal: 5,
            }}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Fifteen")}
            style={{ width: "70%", alignSelf: "center" }}
          >
            <LinearGradient
              style={{
                width: "100%",
                paddingVertical: 10,
                borderRadius: 7,
                marginBottom: 20,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
              colors={["#db2539", "#db2539"]}
            >
              <Text style={{ fontSize: 20, color: "#fff" }}>
                {" "}
                التوصيل لهذا العنوان
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
