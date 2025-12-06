import { StyleSheet, Text, View, Image } from "react-native";
import { GAMES } from "../data/schedule_data";
import Colors from "../constants/colors";

export default function ScheduleDetailScreen(props) {
  const gameId = props.route.params.gameId;
  const selectedGame = GAMES.find((game) => game.id === gameId);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imagesContainer}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: "https://i.imgur.com/zHZUJjP.png" }}
          />
        </View>
        <View>
          <Image style={styles.image} source={{ uri: selectedGame.imageUrl }} />
        </View>
      </View>

      <View style={styles.textContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.accent800,
  },
  imagesContainer: {
    flexDirection: "row",
  },
  image: {
    height: 50,
    borderRadius: 7,
    resizeMode: "contain",
  },
});
