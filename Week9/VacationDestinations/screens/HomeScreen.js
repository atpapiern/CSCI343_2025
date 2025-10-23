import { FlatList, Text, View } from "react-native";
import LocationGridTile from "../components/LocationGridTile";
import { LOCATIONS } from "../data/dummy-data";

export default function HomeScreen(props) {
  function renderLocationItem(itemData) {
    function pressHandler() {
      props.navigation.navigate("DestinationsOverview", {
        locationId: itemData.item.id,
      });
    }

    return (
      <LocationGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={LOCATIONS}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderLocationItem}
        numColumns={2}
      />
    </View>
  );
}
