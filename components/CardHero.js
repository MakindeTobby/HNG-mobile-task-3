import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  Image,
} from "react-native";
import { wp } from "../helpers/common";
import { theme } from "../constants/theme";

const CardHero = () => {
  return (
    <View
      style={{
        marginHorizontal: wp(2),
        marginVertical: wp(2),
        borderRadius: theme.radius.sm,
        overflow: "hidden",
      }}
    >
      <Image
        source={require("../assets/images/Card.png")}
        style={styles.heroContainer}
        resizeMode="contain"
      />
    </View>
  );
};

export default CardHero;

const styles = StyleSheet.create({
  heroContainer: {
    width: "100%",
    height: 232,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: theme.radius.sm,
  },
  overlay: {
    // backgroundColor: "rgba(0, 0, 0, 0.5)", // optional: add an overlay for better text visibility
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: theme.radius.sm,
    paddingLeft: wp(5),
    gap: 4,
  },
  heroText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Montserrat_600SemiBold",
  },
  subText: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 14.63,
  },
});
