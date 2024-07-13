import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp, wp } from "../helpers/common";

const Header = ({ name }) => {
  return (
    <View style={styles.header}>
      <View style={styles.section}>
        <Image
          style={styles.imageUrl}
          source={require("../assets/Malltiverse-Logo.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>{name}</Text>
      </View>
      {/* <View style={styles.section}></View> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
  },
  section: {
    flex: 1,
    alignItems: "flex-start",
  },
  imageUrl: {
    width: 100,
    // height: 50,
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
});
