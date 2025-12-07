import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GAMES } from "../data/schedule_data";
import { PLAYERS } from "../data/player_data";
import Colors from "../constants/colors";

export default function HomePageScreen() {
  const navigation = useNavigation();

  const nextGame = GAMES[0];

  const getRandomPlayer = () => {
    const randomIndex = Math.floor(Math.random() * PLAYERS.length);
    return PLAYERS[randomIndex];
  };

  const [randomPlayer, setRandomPlayer] = useState(getRandomPlayer());

  function handlePlayerPress() {
    const screenName =
      randomPlayer.type === "Pitcher" ? "PitcherInfo" : "FielderInfo";
    navigation.navigate(screenName, {
      playerId: randomPlayer.id,
    });
  }

  function refreshRandomPlayer() {
    setRandomPlayer(getRandomPlayer());
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Next Game</Text>
        <View style={styles.gameContainer}>
          <Text style={styles.gameInfo}>{nextGame.date}</Text>
          <View style={styles.gameInfo}>
            <Text style={styles.opponent}>
              {nextGame.type} vs. {nextGame.opponent}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Player</Text>
          <Pressable onPress={refreshRandomPlayer} style={styles.refreshButton}>
            <Text style={styles.refreshText}>Refresh</Text>
          </Pressable>
        </View>
        <Pressable onPress={handlePlayerPress}>
          <View style={styles.playerContainer}>
            <View style={styles.playerImageContainer}>
              <Image
                style={styles.playerImage}
                source={{ uri: randomPlayer.imageUrl }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.playerInfo}>
              <Text style={styles.playerName}>
                {randomPlayer.firstName} {randomPlayer.lastName}
              </Text>
              <Text style={styles.playerDetails}>
                {randomPlayer.year} - {randomPlayer.position}
              </Text>
            </View>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
  section: {
    margin: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 36,
    fontFamily: "typeBold",
    color: Colors.primary800,
  },
  refreshButton: {
    backgroundColor: Colors.accent200,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
  },
  refreshText: {
    color: "white",
    fontFamily: "typeBold",
    fontSize: 24,
  },
  gameContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
  },
  gameInfo: {
    fontSize: 28,
    fontFamily: "typeBold",
    color: Colors.accent500,
    marginBottom: 8,
  },
  opponent: {
    fontSize: 36,
    fontFamily: "typeBold",
    color: Colors.primary300,
  },
  playerContainer: {
    backgroundColor: Colors.primary500,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  playerImageContainer: {
    height: 300,
    overflow: "hidden",
  },
  playerImage: {
    height: 500,
    borderRadius: 7,
    resizeMode: "cover",
  },
  playerInfo: {
    padding: 16,
    alignItems: "center",
  },
  playerName: {
    fontSize: 32,
    fontFamily: "typeBold",
    color: Colors.primary300,
    textAlign: "center",
    marginVertical: 4,
  },
  playerDetails: {
    fontSize: 24,
    fontFamily: "type",
    color: Colors.primary300,
    marginBottom: 4,
  },
});
