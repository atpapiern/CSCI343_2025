import { StyleSheet, Text, View, Image, Linking, Button } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import Colors from '../constants/colors.js';

export default function BaseScreen(props) {
    //Setting Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();
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
        <Title>El Patio</Title>
    </View>

    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require("../assets/images/restaurant.jpg")}/>
    </View>

    <View style={styles.infoContainer}>
      <Text 
      style={styles.infoText}
      onPress={() => Linking.openURL("tel:843-347-6984")}
      >843-347-6984</Text>

      <Text 
      style={styles.infoText}
      onPress={() => Linking.openURL("https://maps.app.goo.gl/3WM1BN2kS6R3uRCo9")}
      >2394 US-501{"\n"}Conway, SC, 29526</Text>

      <Text
      style={styles.infoText}
      onPress={() => Linking.openURL("https://elpatiomexrest.com/")}
      >www.elpatiomexrest.com</Text>
    </View>

    <View style={styles.buttonContainer}>
      <Button title="View Menu" onPress={props.onNext} color="#000000"/>
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
  imageContainer: {
    flex: 4, 
  },
  image: {
    resizeMode: 'hover', 
    height: '100%', 
    width: 380,
  },
  infoContainer: {
    flex: 3, 
    justifyContent: 'center',
  },
  infoText: {
    fontSize: 50, 
    textAlign: 'center', 
    padding: 7,
    fontFamily: 'cursive',
    color: Colors.primary500,
  }, 
  buttonContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignContent: 'center', 
    borderRadius: 40, 
    width: 200, 
  }
});