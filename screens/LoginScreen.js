import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
  const [phoneNumber, setphoneNumber] = useState(null);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/login.jpg")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logo}></View>
          <View style={styles.logoTitle}>
            <Text style={styles.logoText}>Judi</Text>
          </View>
        </View>
        <View style={{ width: "60%" }}>
          <View
            style={{
              alignSelf: "flex-end",
              paddingBottom: 5,
            }}
          >
            <Text style={{ color: "white", marginRight: 20, fontSize: 25 }}>
              رقم الهاتف
            </Text>
          </View>
          <KeyboardAvoidingView>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  backgroundColor: "white",
                  borderColor: "white",
                  borderWidth: 0.5,
                  borderRadius: 8,
                  width: "93%",
                  marginBottom: 10,
                  paddingVertical: 10,
                }}
              >
                <TextInput
                  style={{ paddingHorizontal: 10, textAlign: "right" }}
                  value={phoneNumber}
                  onChangeText={(text) => setphoneNumber(text)}
                  keyboardType="number-pad"
                  autoFocus
                />
              </View>
              <Entypo name="mobile" size={40} color="white" />
            </View>
          </KeyboardAvoidingView>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              borderWidth: 0.5,
              borderColor: "white",
              borderRadius: 8,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 25,
              marginTop: 20,
              minWidth: 160,
            }}
          >
            <Text style={{ color: "red", textAlign: "center", fontSize: 20 }}>
              تسجيل الدخول
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Text style={{ color: "white", fontSize: 15 }}>ليس لديك حساب؟</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("First")}
            style={{
              backgroundColor: "white",
              borderWidth: 0.5,
              borderColor: "white",
              borderRadius: 8,
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 25,
              marginTop: 10,
              minWidth: 160,
            }}
          >
            <Text style={{ color: "red", textAlign: "center", fontSize: 20 }}>
              سجل الآن
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignSelf: "center",
    marginBottom: 20,
  },
  logo: {
    alignSelf: "center",
    width: 200,
    height: 200,
    //backgroundColor: "red",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "300",
    color: "white",
    marginLeft: 20,
    alignSelf: "center",
  },
});
