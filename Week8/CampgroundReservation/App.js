import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";


import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  //Fonts, SplashScreen, and Loading
  const [loaded] = Font.useFonts({
    Mountain: require("./assets/fonts/Mountain.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  //Rendering Screen
  if (!loaded) {
    return null;
  }

  let screen = (
    <HomeScreen />
  )

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
