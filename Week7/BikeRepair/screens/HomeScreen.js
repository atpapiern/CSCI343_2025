import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { RadioGroup } from "react-native-radio-buttons-group";

import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[
        Colors.primary800,
        Colors.accent500,
        Colors.accent500,
        Colors.accent500,
        Colors.primary800,
      ]}
      start={styles.container}
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
          <Title>Bike Repair</Title>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {/* Repair Time Options */}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Repair Time: </Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="column"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabel}
            />
          </View>

          {/* Upper Portion of the Form Container */}
          <View style={styles.rowContainer}>
            {/* Services Options */}
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Services:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckBox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={styles.checkBoxLabel}
                      innerIconStyle={styles.checkBoxInnerStyle}
                      iconStyle={styles.checkBoxIconStyle}
                      fillColor={Colors.primary500}
                      style={styles.checkBox}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/* Lower Portion of the Form Container */}
          <View style={styles.rowContainer}>
            {/* Add On Options */}
            <View style={styles.switchContainer}>
              <View style={styles.switchSubContainer}>
                <Text style={styles.switchLabel}>Subscribe to Newsletter</Text>
                <Switch
                  onValueChange={props.onSetNewsletter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter ? Colors.primary500 : Colors.primary300
                  }
                  trackColor={{ false: "#bbbbbb", true: "#FFFFFF" }}
                />
              </View>
              <View style={styles.switchSubContainer}>
                <Text style={styles.switchLabel}>Rental Membership</Text>
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembership}
                  thumbColor={
                    props.rentalMembership ? Colors.primary500 : Colors.primary300
                  }
                  trackColor={{ false: "#bbbbbb", true: "#FFFFFF" }}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 30,
    color: Colors.primary500,
    fontFamily: "Slab",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabel: {
    fontSize: 15,
    color: Colors.primary500,
    fontFamily: "Slab",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  checkBoxContainer: {
    width: "100%",
    paddingHorizontal: 12,
  },
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Slab",
    textAlign: "center",
  },
  checkBoxSubContainer: {
    padding: 2,
    width: "100%",
  },
  checkBox: {
    padding: 2,
    width: "100%",
  },
  checkBoxLabel: {
    textDecorationLine: "none",
    color: Colors.primary500,
    fontFamily: "Slab",
  },
  checkBoxInnerStyle: {
    borderRadius: 0,
    borderColor: Colors.primary500,
  },
  checkBoxIconStyle: {
    borderRadius: 0,
  },
  switchContainer: {
    justifyContent: "space-between",
  },
  switchSubContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "Slab",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
