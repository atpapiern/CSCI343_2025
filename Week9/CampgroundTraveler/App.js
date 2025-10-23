import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Colors from "./constants/colors.js";
import HomeScreen from "./screens/HomeScreen";
import CampgroundsOverviewScreen from "./screens/CampgroundsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

//Set the animation options. This is optional
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

export default function App() {
  //Fonts, SplashScreen, and Loading
  const [loaded] = Font.useFonts({
    Camp: require("./assets/fonts/Mountain.ttf"),
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

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={styles.screenOptions}
        >
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "Campground Locations" }}
          />
          <Stack.Screen
            name="CampgroundsOverview"
            component={CampgroundsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screenOptions: {
    headerStyle: { backgroundColor: Colors.primary500 },
    headerTintColor: Colors.primary300,
    headerTitleStyles: { fontFamily: "Camp", fontSize: 40 },
    contentStyle: { backgroundColor: Colors.primary800 },
  },
});
