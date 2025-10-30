import { StyleSheet, Text, View, Image } from "react-native";
import { STORIES } from "../data/dummy_data";
import { useLayoutEffect, useState } from "react";
import Colors from "../constants/colors";
import BookmarkButton from "../components/BookmarkButton";

export default function NewsDetailScreen(props) {
  const storyId = props.route.params.storyId;
  const selectedStory = STORIES.find((story) => story.id === storyId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedStory.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>
          {selectedStory.headline}
        </Text>
        <Text style={styles.date}>
          {selectedStory.date.toLocaleString()}
        </Text>
        <Text style={styles.published}>
          {selectedStory.author} -- {selectedStory.agency}
        </Text>

        <Text style={styles.description}>{selectedStory.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500,
    flex: 1,
    alignItems: "center",
  },
  headline: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "typeBold",
    paddingBottom: 5,
    textAlign:"center",
  },
  date: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "type",
    paddingBottom: 5,
  },
  published: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "type",
    paddingBottom: 5,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    fontSize: 15,
    textAlign: "justify",
    fontFamily: "type",
    paddingBottom: 5,
  },
});
