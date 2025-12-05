import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Favorites Screen</Text>
    </View>
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
