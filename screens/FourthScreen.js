import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ShadowCard } from "../components/ShadowCard";
import TransparentHeader from "../components/TransparentHeader";
const FourthScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        style={{ flex: 1, maxHeight: 160 }}
        source={require("../assets/green.jpg")}
      >
        <TransparentHeader />
      </ImageBackground>

      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.container}>
          <Image
            style={{
              height: 100,
              width: 100,
              resizeMode: "cover",
              marginBottom: 10,
            }}
            source={require("../assets/strawberry.png")}
          />
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
              marginVertical: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Fifth")}>
              <Image
                source={require("../assets/heart1.png")}
                style={{ width: 80, height: 60 }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/heart2.png")}
                style={{ width: 80, height: 60 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default FourthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ededed",
    alignItems: "center",
    paddingVertical: "20%",
  },
});
