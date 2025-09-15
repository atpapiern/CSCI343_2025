import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, FlatList, } from "react-native";
import Movie from "./components/Movie";

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "Baby Driver",
      image: require("./assets/images/baby-driver.jpg"),
      rating: "9.9",
      id: 1,
    },
    {
      name: "Black Panther",
      image: require("./assets/images/black-panther.jpg"),
      rating: "9.7",
      id: 2,
    },
    {
      name: "Ratatouille",
      image: require("./assets/images/ratatouille.jpg"),
      rating: "9.6",
      id: 3,
    },
    {
      name: "Good Will Hunting",
      image: require("./assets/images/good-will-hunting.jpg"),
      rating: "9.6",
      id: 4,
    },
    {
      name: "National Treasure",
      image: require("./assets/images/national-treasure.jpg"),
      rating: "9.5",
      id: 5,
    },
    {
      name: "WALL-E",
      image: require("./assets/images/wall-e.jpg"),
      rating: "9.4",
      id: 6,
    },
    {
      name: "Moneyball",
      image: require("./assets/images/moneyball.jpg"),
      rating: "9.4",
      id: 7,
    },
    {
      name: "The Incredibles",
      image: require("./assets/images/incredibles.jpg"),
      rating: "9.4",
      id: 8,
    },
    {
      name: "Shark Tale",
      image: require("./assets/images/shark-tale.jpg"),
      rating: "9.2",
      id: 9,
    },
    {
      name: "Cool Runnings",
      image: require("./assets/images/cool-runnings.jpg"),
      rating: "8.9",
      id: 10,
    },
  ]);

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList 
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            data={movieItems}
            keyExtractor={(item, index) => item.id}
            renderItem={(itemData) => {
              return <Movie
                name={itemData.item.name}
                image={itemData.item.image}
                rating={itemData.item.rating}
              />
            }} 
          />

        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#006f71",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: 'white',
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});
