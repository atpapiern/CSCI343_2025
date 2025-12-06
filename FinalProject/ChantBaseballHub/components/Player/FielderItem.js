import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function FielderItem(props) {
  const navigation = useNavigation();

  function selectedPlayerHandler() {
    navigation.navigate("FielderInfo", {
      playerId: props.id,
    });
  }

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={selectedPlayerHandler}>
        <View style={styles.playerContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: props.imageUrl }} />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>
              #{props.id} {props.firstName} {props.lastName}
            </Text>
            <Text style={styles.info}>
              {props.year} - {props.position}
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
  playerContainer: {
    flexDirection: "row",
  },
  imageContainer: {
    paddingVertical:10,
  },
  image: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    padding:10,
  },
  name: {
    fontSize: 35,
    fontFamily: "typeBold",
    textAlign: "center",
  },
  info: {
    fontSize: 25,
    fontFamily: "type",
  },
});
