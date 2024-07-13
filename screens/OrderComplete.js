import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { theme } from "../constants/theme";
import { hp } from "../helpers/common";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { clearCart } from "../store/Slices/CartSlice";
import { AntDesign } from "@expo/vector-icons";

const OrderSuccessScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const delCart = () => {
    dispatch(clearCart());
    navigation.navigate("Home");
  };

  return (
    <ImageBackground
      source={require("../assets/images/confetti.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.circle}>
          <AntDesign name="check" size={40} color="white" />
        </View>
        <Text style={styles.text}>Payment Successful</Text>
        <View>
          <Text style={styles.thanksText}>Thanks for your purchase</Text>
        </View>
        <Pressable style={styles.startButton} onPress={delCart}>
          <Text style={styles.startText}>CONTINUE SHOPPING</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default OrderSuccessScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Optional: Adds a semi-transparent overlay
    padding: 20,
    borderRadius: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
    fontFamily: "Montserrat_600SemiBold",
  },
  thanksText: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 15,
  },
  startButton: {
    marginBottom: 5,
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: theme.radius.md,
    borderCurve: "continuous",
  },
  startText: {
    color: theme.colors.white,
    fontSize: hp(2),
    letterSpacing: 1,
    alignSelf: "center",
  },
});
