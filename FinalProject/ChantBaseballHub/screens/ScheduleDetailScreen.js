import { StyleSheet, Text, View, Image } from "react-native";
import { GAMES } from "../data/schedule_data";
import Colors from "../constants/colors";

export default function ScheduleDetailsScreen(props) {
  const gameId = props.route.params.gameId;
  const selectedGame = GAMES.find((game) => game.id === gameId);

  return (
    <View style={styles.rootContainer}>

      <View style={styles.matchupContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://i.imgur.com/GXI3e9T.png" }}
          />
        </View>

        <View style={styles.vsContainer}>
          <Text style={styles.vsText}>
            {selectedGame.type === "Home" ? "vs" : "@"}
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: selectedGame.imageUrl }}
          />
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.teamName}>Coastal Carolina</Text>
        <Text style={styles.vsLittleText}>
          {selectedGame.type === "Home" ? "vs." : "@"}
        </Text>
        <Text style={styles.teamName}>{selectedGame.opponent}</Text>
        <Text style={styles.info}>{selectedGame.date}</Text>
        <Text style={styles.info}>{selectedGame.venue}, {selectedGame.location}</Text>
        <Text style={styles.info}>{selectedGame.event}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primary800,
  },
  matchupContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.primary800,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: "contain",
    backgroundColor: Colors.primary800,
    borderRadius: 10,
  },
  vsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  vsText: {
    color: Colors.accent800,
    fontSize: 48,
    fontFamily: "typeBold",
  },
  infoContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  teamName: {
    color: Colors.accent800,
    fontSize: 36,
    fontFamily: "typeBold",
    textAlign: "center",
    marginVertical: 10,
  },
  vsLittleText: {
    color: Colors.accent800,
    fontSize: 28,
    fontFamily: "typeBold",
  },
  info: {
    color: Colors.accent800,
    fontSize: 28,
    fontFamily: "type",
    marginBottom: 10,
    textAlign:"center",
  },
});