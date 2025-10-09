import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";

import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function OrderReviewScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
    source={require("../assets/images/bikebackground.jpg")}
    resizeMode="cover"
    style={styles.container}
    imageStyle={styles.backgroundImage}
    >
      <View
        style={[
          styles.container,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>Order Summary</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Your order has been placed with your order details below
            </Text>
          </View>
          <View style={styles.servicesContainer}>
            <Text style={styles.services}>Repair Time:</Text>
            <Text style={styles.subServices}>{props.size}</Text>
            <Text style={styles.services}>Services:</Text>
            {props.services.map((item) => {
              if (item.value) {
                return (
                  <Text key={item.id} style={styles.subServices}>
                    {item.name}
                  </Text>
                );
              }
            })}
          </View>
          <Text style={styles.services}>Add Ons:</Text>
          <Text style={styles.subServices}>
            {props.newsletter ? "Newsletter" : ""}
          </Text>
          <Text style={styles.subServices}>
            {props.rentalMembership ? "Rental Membership" : ""}
          </Text>

            <View style={styles.priceContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              SubTotal: ${props.price.toFixed(2)}
            </Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Sales Tax: ${(props.price * 0.06).toFixed(2)}
            </Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
              Total: ${(props.price + props.price * 0.06).toFixed(2)}
            </Text>
          </View>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Return Home</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage:{
    opacity:0.1, 
  },
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary500,
    paddingHorizontal: 30,
  },
  scrollContainer: {
    flex: 1,
  },
  subTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
  },
  servicesContainer: {
    flex: 3,
  },
  services: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Slab",
    marginHorizontal:10,
  },
  subServices: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.primary500,
    fontFamily: "Slab",
  },
  priceContainer:{
    marginTop: "10%"
  },
  buttonContainer: {
    alignItems: "center",
  },
});
