import { View, StyleSheet, FlatList } from "react-native";
import PitcherItem from "./PitcherItem";

export default function Pitcher(props) {
  function renderPitcherItem(itemData) {
    const pitcherItemProps = {
      id: itemData.item.id,
      lastName: itemData.item.lastName,
      firstName: itemData.item.firstName,
      position: itemData.item.position,
      year: itemData.item.year,
      walkUpSongName: itemData.item.walkUpSongName,
      appearances: itemData.item.appearances,
      statistic: itemData.item.statistic,
      imageUrl: itemData.item.imageUrl,
      playerIndex: itemData.index,
    };
    return <PitcherItem {...pitcherItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderPitcherItem}
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
