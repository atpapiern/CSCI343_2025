import { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import Game from "../components/Game/Game";
import { GAMES } from "../data/schedule_data";
import Colors from "../constants/colors.js";
export default function ScheduleScreen() {
  const [showHomeOnly, setShowHomeOnly] = useState(false);

  let displayedGames;
  if (showHomeOnly) {
    displayedGames = GAMES.filter(
      (scheduleItem) => scheduleItem.type === "Home"
    );
  } else {
    displayedGames = GAMES;
  }

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>{"All"}</Text>
        <Switch
          value={showHomeOnly}
          onValueChange={setShowHomeOnly}
          trackColor={{ false: "#cccccc", true: Colors.accent200 }}
          thumbColor={showHomeOnly ? Colors.primary800 : Colors.primary800}
        />
        <Text style={styles.toggleText}>{"Home"}</Text>
      </View>
      <Game items={displayedGames} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  toggleText: {
    fontFamily: "typeBold",
    fontSize: 22,
    textAlign: "right",
  },
});
