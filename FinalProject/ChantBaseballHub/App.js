import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome6, Ionicons } from "@expo/vector-icons";

import FavoritesScreen from "./screens/FavoritesScreen";
import Colors from "./constants/colors";
import HomePageScreen from "./screens/HomePageScreen";
import FielderScreen from "./screens/FielderScreen";
import FielderDetailScreen from "./screens/FielderDetailsScreen";
import PitcherScreen from "./screens/PitcherScreen";
import PitcherDetailScreen from "./screens/PitcherDetailsScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import ScheduleDetailScreen from "./screens/ScheduleDetailScreen";
import FavoritesContextProvider from "./store/context/favorites-context";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 3000,
  fade: true,
});

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "header",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={TabsNavigator}
        options={{
          title: "Chant Baseball Hub",
          drawerLabel: "Home Page",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="baseball-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorite Players",
          drawerLabel: "Favorite Players",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "typeBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="HomePage"
        component={HomePageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="house-chimney" color={color} size={size} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="Fielder"
        component={FielderScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="baseball-bat-ball" color={color} size={size} />
          ),
          tabBarLabel: "Fielders",
        }}
      />
      <Tabs.Screen
        name="Pitcher"
        component={PitcherScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="baseball" color={color} size={size} />
          ),
          tabBarLabel: "Pitchers",
        }}
      />
      <Tabs.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="calendar" color={color} size={size} />
          ),
          tabBarLabel: "Schedule",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  //Fonts, SplashScreen, and Loading
  const [loaded] = Font.useFonts({
    type: require("./assets/fonts/CrimsonText-Regular.ttf"),
    typeBold: require("./assets/fonts/CrimsonText-Bold.ttf"),
    header: require("./assets/fonts/CityBold.ttf"),
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
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="DrawerScreen"
            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="FielderInfo" component={FielderDetailScreen} />
            <Stack.Screen name="PitcherInfo" component={PitcherDetailScreen} />
            <Stack.Screen
              name="GameInfo"
              component={ScheduleDetailScreen}
              options={{
                title: "",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
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
});
