import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { clearCart } from "../store/Slices/CartSlice";
import Header from "../components/Header";
import { totalCartPriceSelector } from "../store/selectors/CartSelector";
import CardHero from "../components/CardHero";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const navigation = useNavigation();

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    if (cartItems.length <= 0) {
      navigation.navigate("Home");
    }
  }, [cartItems, navigation]);

  const handleSubmitOrder = () => {
    // Your order submission logic
    // For example, an API call to submit the order
    // If the order submission is successful:
    navigation.navigate("Complete");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <Header name={"Payment"} />
      <CardHero />
      <View style={styles.formContainer}>
        <Text style={styles.itemTitle}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
        <View style={styles.row}>
          <View style={styles.inputWrapper}>
            <Text style={styles.itemTitle}>Expiry Date</Text>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="MM/YY"
              keyboardType="numeric"
              value={expiryDate}
              onChangeText={setExpiryDate}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.itemTitle}>CVV</Text>
            <TextInput
              style={[styles.input, styles.inputHalf]}
              placeholder="CVV"
              keyboardType="numeric"
              value={cvv}
              onChangeText={setCvv}
            />
          </View>
        </View>
        <Pressable style={styles.button} onPress={handleSubmitOrder}>
          <Text style={styles.buttonText}>Make Payment</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formContainer: {
    marginVertical: hp(2),
    marginHorizontal: wp(2),
    gap: 4,
  },
  inputWrapper: {
    width: "48%",
  },
  input: {
    height: 50,
    borderColor: theme.colors.neutral(0.5),
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputHalf: {
    width: "100%",
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: theme.colors.dark,
    fontSize: hp(2),
    fontFamily: "Montserrat_400Regular",
  },
  itemTitle: {
    fontFamily: "Montserrat_600SemiBold",
    color: "#4B5563",
    marginBottom: 5,
  },
});
