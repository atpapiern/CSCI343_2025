import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Colors from '../constants/colors';
import { LISTINGS } from '../data/dummy_data';
import List from "../components/List/List";

export default function BookmarksScreen() {
  const favoriteListingsIds = useSelector((state => state.favoriteListings.ids));

  const favoriteListings = LISTINGS.filter((listingItem) => {
    return favoriteListingsIds.includes(listingItem.id);
  });

  if (favoriteListings.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no saved listings yet!</Text>
      </View>
    );
  } else {
    return <List items={favoriteListings} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize:24, 
    fontWeight: 'bold', 
    color:Colors.primary300,
  }
});
