import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function GameItem(props) {
  const navigation = useNavigation();

  function selectedGameHandler() {
    navigation.navigate("GameInfo", {
      gameId: props.id,
    });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={selectedGameHandler}>
        <View style={styles.gameContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.importantInfo}>
              {props.type} vs. {props.opponent}
            </Text>
            <Text style={styles.info}>
              {props.date}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 10,
    borderRadius: 7,
    backgroundColor: "#ccc",
    paddingHorizontal:10,
  },
  gameContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    padding:10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode:"contain",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "left",
    justifyContent:'center',
    padding:10,
  },
  importantInfo: {
    fontSize: 24,
    fontFamily: "typeBold",
    textAlign: "left",
  },
  info: {
    fontSize: 20,
    fontFamily: "typeBold",
  },
});
