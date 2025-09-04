import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image 
            style={styles.image}
            source={require("./assets/images/headshot.jpg")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Alex Papiernik</Text>
          <Text 
            style={styles.text}
            onPress={() => {
              Linking.openURL("mailto:atpapiern@coastal.edu");
            }}
            >atpapiern@coastal.edu</Text>
          <Text 
            style={styles.text}
            onPress={() => {
              Linking.openURL("tel:7048160467");
            }}
            >(704) 816-0467</Text>
          <Text 
            style={styles.text}
            onPress={() => {
              Linking.openURL("https://github.com/atpapiern");
            }}
            >My GitHub Link</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#006f71"
  },
  imageContainer: {
    flex: 2,
    marginTop: 50, 
    padding: 50,
    width: "100%"
  },
  image: {
    height: 310, 
    width: "100%",
    resizeMode: "center",
    borderColor: "black",
    borderWidth: 5
  },
  textContainer: {
    flex: 2,
    alignItems: "center"
  },
  name: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 50
  }, 
  text: {
    textAlign: "center", 
    fontSize: 30, 
    fontStyle: "italic", 
    marginBottom: 20
  }
});
