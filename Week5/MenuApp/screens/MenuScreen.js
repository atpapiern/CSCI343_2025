import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from 'react';

import Title from "../components/Title";
import MenuItem from "../components/MenuItem";

export default function MenuScreen(props) {
    //Setting Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "Enchiladas",
      image: require("../assets/images/enchiladas.jpg"),
      price: "$11.99",
      id: 1,
    },
    {
      name: "Tacos",
      image: require("../assets/images/tacos.jpg"),
      price: "$9.99",
      id: 2,
    },
    {
      name: "Burrito",
      image: require("../assets/images/burrito.jpg"),
      price: "$12.49",
      id: 3,
    },
    {
      name: "Quesadilla",
      image: require("../assets/images/quesadilla.jpg"),
      price: "$14.99",
      id: 4,
    },
    {
      name: "Chips and Guacamole",
      image: require("../assets/images/guacamole.jpg"),
      price: "$8.49",
      id: 5,
    },
  ]);

  return (<View style={[
    styles.rootContainer, 
    {
        paddingTop: insets.top, 
        paddingBottom: insets.bottom, 
        paddingLeft: insets.left, 
        paddingRight: insets.right
    }
  ]}>

    <View style={styles.titleContainer}>
        <Title>Menu</Title>
    </View>

    <View style={styles.listContainer}>
      <FlatList
      data={menuItems}
      keyExtractor={(item, index) => {return item.id;}}
      alwaysBounceVertical={false}
      showsVerticalScrollIndicator={false}
      renderItem={(itemData) => {
        return (<MenuItem 
          name={itemData.item.name} 
          image={itemData.item.image}
          price={itemData.item.price}/>)}}
      />
    </View>

    <View style={styles.buttonContainer}>
      <Button title="Main Menu" onPress={props.onNext} color="#000000"/>
    </View>
</View>
)
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1, 
    justifyContent: 'center',
  },
  listContainer: {
    flex: 7, 
    width: 380,
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center', 
    borderRadius: 40, 
    width: 200, 
  }
});
