import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  CheckBox,
  Image,
  TextInput,
} from "react-native";
import Header from "../components/Header";
import { GradientColors } from "../components/LinearGradient";
import { ShadowCard } from "../components/ShadowCard";
import { LinearGradient } from "expo-linear-gradient";

const CardComponent = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <>
      <Header colors={GradientColors.FirstScreen} />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.main}>
          <TouchableOpacity onPress={() => navigation.navigate("Fourteen")}>
            <LinearGradient
              colors={GradientColors.SecondScreen}
              style={styles.buttonStyle}
            >
              <Text
                style={{ textAlign: "center", color: "#fff", fontSize: 25 }}
              >
                عنوا ن التوصيل
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.mainWrapper}>
            <Text
              style={{
                marginTop: 10,
                color: "#1A1A1C",
                fontSize: 16,
              }}
            >
              عناوين التوصيل
            </Text>
            <View style={styles.radiodiv}>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#1A1A1C" }}
              >
                مستشفى الملك عبد العزيز
              </Text>

              <CheckBox value={isSelected} onValueChange={setSelection} />
            </View>
            <View style={styles.textButtondiv}>
              <Text style={styles.textButtonstyle}>تاديل أنوان</Text>
              <Text style={styles.textButtonstyle}>إضافة عنوان</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              {/* <TouchableOpacity style={styles.nextbuttonStyle}>
                <Text
                  style={{ textAlign: "center", color: "#fff", fontSize: 25 }}
                >
                  النواسية
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity>
                <LinearGradient
                  colors={GradientColors.SecondScreen}
                  style={styles.buttonStyle}
                >
                  <Text
                    style={{ textAlign: "center", color: "#fff", fontSize: 25 }}
                  >
                    طرق الدفع
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.imagediv}>
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlVGf08pz-EprSZ2udOC3EuPE0nJTsanR1jA&usqp=CAU",
                    }}
                    style={{
                      width: 70,
                      height: 60,
                      resizeMode: "cover",
                      alignSelf: "center",
                    }}
                  />
                </View>
                <View style={styles.imagediv}>
                  <Image
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7_bZBebD96r6kUHFpAYur-xMWCl-DRQVPSQ&usqp=CAU",
                    }}
                    style={{
                      width: 70,
                      height: 60,
                      resizeMode: "cover",
                      alignSelf: "center",
                    }}
                  />
                </View>
                <View style={styles.imagediv}>
                  <Image
                    source={{
                      uri:
                        "https://i0.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/01/paypal.png?fit=1000%2C600&ssl=1",
                    }}
                    style={{
                      width: 70,
                      height: 60,
                      resizeMode: "cover",
                      alignSelf: "center",
                    }}
                  />
                </View>
              </View>
              <View>
                <View
                  style={{
                    marginTop: 20,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#39383C" }}>
                    رقم البطاقة
                  </Text>
                </View>
                <ShadowCard mTop={5}>
                  <TextInput
                    placeholder=" رقم البطاقة "
                    style={{ textAlign: "right" }}
                  />
                </ShadowCard>
                <View
                  style={{
                    marginTop: 15,
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#39383C" }}>
                    الاسم في البطاقة
                  </Text>
                </View>
                <ShadowCard mTop={5}>
                  <TextInput
                    placeholder=" الاسم في البطاقة"
                    style={{ textAlign: "right" }}
                  />
                </ShadowCard>

                <View style={{ width: "100%" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#39383C",
                      textAlign: "right",
                      marginTop: 10,
                    }}
                  >
                    تاريخ الانتهاء
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <ShadowCard mTop={6} width="40%">
                      <TextInput placeholder="CVV" />
                    </ShadowCard>
                    <ShadowCard mTop={6} width="58%">
                      <TextInput placeholder="MMYY" />
                    </ShadowCard>
                  </View>
                </View>
                <TouchableOpacity style={styles.bottombtn}>
                  <LinearGradient
                    style={{
                      width: "100%",
                      paddingVertical: 10,
                      borderRadius: 10,
                    }}
                    colors={GradientColors.FirstScreen}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 25,
                        textAlign: "center",
                      }}
                    >
                      ادفع الآن
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  main: {
    // height: 90,
    flex: 1,
    width: "100%",
    backgroundColor: "#ededed",
    alignItems: "center",
  },
  buttonStyle: {
    justifyContent: "center",
    paddingHorizontal: 50,
    marginTop: 30,
    padding: 10,
    borderRadius: 10,
  },
  mainWrapper: {
    width: "80%",
    flex: 1,
  },
  radiodiv: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    elevation: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  textButtondiv: {
    height: 45,
    width: "100%",
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textButtonstyle: {
    backgroundColor: "#040537",
    padding: 10,
    width: "49%",
    textAlign: "center",
    borderRadius: 5,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    elevation: 2,
  },
  nextbuttonStyle: {
    width: "60%",
    backgroundColor: "#270B83",
    justifyContent: "center",
    marginTop: 30,
    padding: 10,
    borderRadius: 13,
  },
  imagediv: {
    width: "30%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  bottombtn: {
    marginBottom: 20,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    //backgroundColor: "#E96E30",
    minHeight: 50,
    minWidth: 50,
    borderRadius: 5,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});
