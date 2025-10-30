import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function StoryItem(props) {
  const navigation = useNavigation();

  function selectedStoryHandler() {
    navigation.navigate("StoryDetail", {
      storyId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.storyIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedStoryHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.headline}>{props.headline}</Text>
          <Text style={styles.date}>
            {props.date.toLocaleString()}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 35,
    fontFamily: "typeBold",
    paddingBottom: 5,
    textAlign:"center",
  },
  date: {
    fontSize: 25,
    fontFamily: "type",
    paddingBottom: 5,
  },
});
