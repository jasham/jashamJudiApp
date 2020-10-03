import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import TransparentHeader from "../components/TransparentHeader";
import { AntDesign } from "@expo/vector-icons";
import { ShadowCard } from "../components/ShadowCard";

const TenthScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/brown.jpg")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <TransparentHeader />
        <View style={styles.main}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ alignItems: "flex-end" }}>
              <AntDesign name="close" size={24} color="#db2539" />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Eleven")}
              style={styles.buttonStyle}
            >
              <Text style={styles.textbuttons}>خيارات إضافية</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //   paddingHorizontal: 10,
              }}
            >
              <View style={styles.cardDiv}>
                <Image
                  source={require("../assets/sixteen1.png")}
                  style={{ height: 80, width: 80 }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#db2539",
                    marginTop: 10,
                  }}
                >
                  لحم مفروم
                </Text>
                <TouchableOpacity style={styles.cardButton}>
                  <Text
                    style={{ color: "#fff", fontSize: 15, alignSelf: "center" }}
                  >
                    اختر الكمية
                  </Text>
                  <View style={{ alignSelf: "center" }}>
                    <AntDesign name="down" size={15} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.cardDiv}>
                <Image
                  source={require("../assets/sixteen2.png")}
                  style={{ height: 80, width: 80, resizeMode: "contain" }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#db2539",
                    marginTop: 10,
                  }}
                >
                  التغليف
                </Text>
                <TouchableOpacity style={styles.cardButton}>
                  <Text
                    style={{ color: "#fff", fontSize: 15, alignSelf: "center" }}
                  >
                    اختر الطريقة
                  </Text>
                  <View style={{ alignSelf: "center" }}>
                    <AntDesign name="down" size={15} color="#fff" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.InputListmainDiv}>
              <Text style={{ fontSize: 20, color: "#fff" }}> ملاحظات</Text>
              <ShadowCard noPad radius={15}>
                <TextInput
                  style={{
                    textAlign: "right",
                    paddingHorizontal: 10,
                    paddingVertical: 13,
                    fontSize: 20,
                    width: "100%",
                  }}
                />
              </ShadowCard>
              <ShadowCard
                radius={15}
                mTop={20}
                flexDirection={"row"}
                justifyContent={"space-between"}
                backgroundColor="#db2539"
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                  }}
                >
                  ريال
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff",
                  }}
                >
                  المجموع الكلي:
                </Text>
              </ShadowCard>
              <ShadowCard
                radius={15}
                mTop={20}
                justifyContent={"center"}
                backgroundColor="#db2539"
              >
                <Text
                  style={{
                    fontSize: 20,
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  اضف للسلة واختر منتج آخر
                </Text>
              </ShadowCard>
              <View style={{ alignItems: "center" }}>
                <ShadowCard
                  radius={15}
                  mTop={20}
                  justifyContent={"center"}
                  backgroundColor="#db2539"
                  width="70%"
                  mBot={10}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    إتما معملية الشراء
                  </Text>
                </ShadowCard>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default TenthScreen;

const styles = StyleSheet.create({
  main: {
    width: "90%",
    flex: 1,
  },
  buttonStyle: {
    alignItems: "center",
    marginTop: 15,
  },
  textbuttons: {
    backgroundColor: "#db2539",
    width: "70%",
    // paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 12,
    textAlign: "center",
    fontSize: 20,

    color: "#fff",
  },
  cardDiv: {
    //height: 160,
    width: "45%",
    backgroundColor: "#fff",
    marginTop: 45,
    borderRadius: 8,
    elevation: 3,
    alignItems: "center",

    paddingVertical: 10,
  },
  cardButton: {
    //paddingHorizontal: 15,
    width: "65%",
    borderRadius: 20,
    paddingVertical: 6,
    backgroundColor: "#db2539",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  InputListmainDiv: {
    marginTop: 20,
  },
});
