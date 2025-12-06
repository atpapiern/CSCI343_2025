import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { PLAYERS } from "../data/player_data";
import Pitcher from "../components/Player/Pitcher";
import Colors from "../constants/colors";

export default function FavoritesScreen() {
  const favoritePlayersCtx = useContext(FavoritesContext);
  const favoritePlayers = PLAYERS.filter((playerItem) => {
    return favoritePlayersCtx.ids.includes(playerItem.id);
  });

  if (favoritePlayers.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite players yet!</Text>
      </View>
    );
  } else {
      return <Pitcher items={favoritePlayers} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontFamily:'typeBold',
    fontSize:24, 
    color:Colors.accent500,
    textAlign:'center',
  }
});
