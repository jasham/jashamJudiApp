import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function TransparentHeader(props) {
  const navigation = useNavigation();
  const DATA = ["الكل", "سوبر ماركت", "حلقة الخضار", "سوق السمك"];
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomLeftRadius: props.noRadius ? 0 : 10,
          borderBottomRightRadius: props.noRadius ? 0 : 10,
        },
      ]}
    >
      <View style={styles.InnerWrapper}>
        <View style={styles.IconWrapper}>
          {!props.noSearch && (
            <TouchableOpacity style={styles.Icon}>
              <Feather name="search" size={35} color="#fff" />
              <Text style={styles.Text}>البحث</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.Icon}>
            <FontAwesome5 name="hotel" size={35} color="#fff" />
            <Text style={styles.Text}>المتاجر</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Icon}>
            <FontAwesome5 name="home" size={35} color="#fff" />
            <Text style={styles.Text}>الرئيسية</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Icon}>
            <Feather name="shopping-bag" size={35} color="#fff" />
            <Text style={styles.Text}>سلتي</Text>
            <View
              style={{
                position: "absolute",
                right: 2,
                width: 18,
                height: 18,
                borderRadius: 18 / 2,
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 10, textAlign: "center" }}
              >
                1
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.Icon}
          >
            <Ionicons name="ios-menu" size={50} color="#fff" />
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          inverted
          keyExtractor={(item, index) => index.toString()}
          data={DATA}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  elevation: props.elevation ? props.elevation : 5,
                  shadowOffset: { width: 4, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  width: 90,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 12,
                  marginRight: 10,
                }}
              >
                <Text style={{ fontSize: 17 }}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    //height: 160,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  InnerWrapper: {
    flexDirection: "column",
  },
  IconWrapper: {
    padding: 5,
    // backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Icon: {
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "#fff",
    fontSize: 20,
  },
});
