import { StyleSheet, Text, View, Image } from "react-native";
import { PLAYERS } from "../data/player_data";
import { useContext, useLayoutEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import FavoriteButton from "../components/FavoriteButton";
import { FavoritesContext } from "../store/context/favorites-context";

export default function PitcherDetailScreen(props) {
  const favoritePlayersCtx = useContext(FavoritesContext);

  const playerId = props.route.params.playerId;
  const selectedPlayer = PLAYERS.find((player) => player.id === playerId);

  const playerIsFavorite = favoritePlayersCtx.ids.includes(playerId);

  function changeFavoriteStatusHandler() {
    if (playerIsFavorite) {
      favoritePlayersCtx.removeFavorite(playerId);
    } else {
      favoritePlayersCtx.addFavorite(playerId);
    }
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <FavoriteButton
            isFavorite={playerIsFavorite}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeFavoriteStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedPlayer.imageUrl }} />
        <LinearGradient
          colors={["transparent", Colors.primary500]}
          style={styles.gradient}
          locations={[0.5, 1]}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.headline}>
          {selectedPlayer.firstName} {selectedPlayer.lastName} #{selectedPlayer.id}
        </Text>
        <Text style={styles.importantInfo}>
          {selectedPlayer.year} - {selectedPlayer.position} 
        </Text>
        <Text style={styles.info}>
          <FontAwesome name="music" color={"black"} size={18} />
          <Text style={styles.songInfo}> {selectedPlayer.walkUpSongName}</Text>
        </Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            {selectedPlayer.lastName} had {selectedPlayer.appearances}{" "}
            pitching appearances last season with an ERA of{" "}
            {selectedPlayer.statistic}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    height: 400,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
  },
  textContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500,
    flex: 1,
    alignItems: "center",
    padding:5,
  },
  headline: {
    color: Colors.primary300,
    fontSize: 54,
    fontFamily: "typeBold",
    textAlign: "center",
  },
  importantInfo: {
    fontSize: 36,
    fontFamily: "typeBold",
  },
  songInfo: {
    justifyContent: "center",
    fontSize: 20,
    fontFamily: "typeBold",
  },
  infoContainer:{
    width:'80%',
    padding:10,
  },
  info: {
    fontSize: 20,
    fontFamily: "type",
    textAlign:"center"
  },
});
