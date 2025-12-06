import { View, StyleSheet, FlatList } from "react-native";
import GameItem from "./GameItem";

export default function Game(props) {
  function renderGameItem(itemData) {
    const gameItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      opponent: itemData.item.opponent,
      date: itemData.item.date,
      venue: itemData.item.venue,
      location: itemData.item.location,
      event: itemData.item.event,
      imageUrl: itemData.item.imageUrl,
      gameIndex: itemData.index,
    };
    return <GameItem {...gameItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderGameItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
});
