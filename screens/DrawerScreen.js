import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export function DrawerContentScreen(props) {
  return (
    <>
      <View style={{ flex: 1, paddingTop: 20 }}>
        <DrawerContentScrollView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 20 }}>ادفلةعرض نواز</Text>
              <Text>mohammed80@gmail.com</Text>
            </View>
            <View style={{ marginRight: 8 }}>
              <Image
                source={{
                  uri:
                    "https://images.pexels.com/photos/130576/pexels-photo-130576.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
                style={{ height: 50, width: 50, borderRadius: 50 }}
              />
            </View>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity style={styles.firstBtn}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                حسابية
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainList}>
            <TouchableOpacity style={styles.listbt}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                عنصر هارديشت
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listbt2}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                طيب ولا سنسار
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listbt}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                أمي توماكي ماري
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listbt2}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                عنصر هارديشت
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.listbt}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                أمي توماكي ماري
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <TouchableOpacity style={styles.bottomtBtn}>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                حسابية
              </Text>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  firstBtn: {
    backgroundColor: "#80b055",
    paddingVertical: 10,
    marginTop: 20,
    alignItems: "center",
    // paddingHorizontal: 50,
    width: "90%",
    borderRadius: 15,
  },
  mainList: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  listbt: {
    backgroundColor: "green",
    width: "100%",
    paddingVertical: 15,
    paddingRight: 15,
    alignItems: "flex-end",
  },
  listbt2: {
    backgroundColor: "#80b055",
    width: "100%",
    paddingVertical: 15,
    paddingRight: 15,
    alignItems: "flex-end",
  },
  bottomtBtn: {
    backgroundColor: "#db2539",
    paddingVertical: 10,
    marginTop: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    // paddingHorizontal: 50,
    width: "90%",
    borderRadius: 15,
  },
});
