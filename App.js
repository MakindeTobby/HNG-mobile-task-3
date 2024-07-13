import { Provider } from "react-redux";
import Navigation from "./Navigation";
import { store } from "./store/store";
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { ActivityIndicator, View } from "react-native";
import { theme } from "./constants/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  let fontSize = 24;
  let paddingVertical = 6;
  if (!fontsLoaded) {
    return (
      <View
        style={{
          marginTop: 10,
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: theme.radius.sm,
        }}
      >
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
