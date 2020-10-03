import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import { ShadowCard } from "../components/ShadowCard";
import HeartButton from "../components/HeartButton";
import { Ionicons } from "@expo/vector-icons";
import { GradientColors } from "../components/LinearGradient";
import { LinearGradient } from "react-native-svg";
import TransparentHeader from "../components/TransparentHeader";
const StrawberryScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/green.jpg")}
    >
      <TransparentHeader />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.container}>
          <ShadowCard width="70%" alignItems="center" mBot={10}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../assets/strawberry.png")}
            />
          </ShadowCard>
          <ShadowCard width="70%">
            <Text style={{ textAlign: "right", color: "red" }}>
              فراولة أمريكية
            </Text>
            <Text style={{ fontSize: 10, textAlign: "right" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui .blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi Lorem ipsum dolor sit amet, cons
              ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, qui
            </Text>
          </ShadowCard>
          <View
            style={{
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <HeartButton
              backgroundColor="white"
              onPress={() => navigation.navigate("Seventh")}
            >
              <Text style={{ color: "red", textAlign: "center" }}>
                ٤٥ ريال{" "}
              </Text>
              <Text style={{ color: "red", textAlign: "center" }}>كرتون</Text>
              <View style={{ marginLeft: -8 }}>
                <Ionicons name="md-add-circle" size={30} color="red" />
              </View>
            </HeartButton>
            <HeartButton backgroundColor="white">
              <Text style={{ color: "red", textAlign: "center" }}>
                ٤٥ ريال{" "}
              </Text>
              <Text style={{ color: "red", textAlign: "center" }}>كرتون</Text>
              <View style={{ marginLeft: -8 }}>
                <Ionicons name="md-add-circle" size={30} color="red" />
              </View>
            </HeartButton>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default StrawberryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //backgroundColor: "#68c95d",
    alignItems: "center",
    paddingVertical: "15%",
  },
});
