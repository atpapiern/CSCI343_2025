import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { DESTINATIONS, LOCATIONS } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";

export default function DestinationsOverviewScreen(props) {
  const locationId = props.route.params.locationId;

  useLayoutEffect(() => {
    const location = LOCATIONS.find((location) => location.id === locationId);
    props.navigation.setOptions({ title: location ? location.name : null });
  }, [locationId, props.navigation]);

  const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
    return destinationItem.locationId === locationId;
  });

  function renderDestinationItem(itemData) {
    const destinationItemProps = {
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      numSites: itemData.item.numSites,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      listIndex: itemData.index,
    };

    return <DestinationItem {...destinationItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedDestinations}
        keyExtractor={(item) => item.id}
        renderItem={renderDestinationItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
