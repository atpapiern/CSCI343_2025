import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { STORIES } from "../data/dummy_data";
import Story from "../components/Story/Story";
import Colors from "../constants/colors";

export default function BookmarksScreen() {
  const bookmarkedStoriesCtx = useContext(BookmarksContext);
  const bookmarkedStories = STORIES.filter((storyItem) => {
    return bookmarkedStoriesCtx.ids.includes(storyItem.id);
  });

  if (bookmarkedStories.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no saved stories yet!</Text>
      </View>
    );
  } else {
    return <Story items={bookmarkedStories} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontFamily:'typeBold',
    fontSize:36, 
    color:Colors.accent800,
    textAlign:'center',
  }
});
