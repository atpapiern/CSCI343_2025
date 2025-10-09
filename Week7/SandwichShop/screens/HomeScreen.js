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
    colors={[Colors.accent500, Colors.primary800]}
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
        <Title>Deli Delights</Title>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Sandwich Size Options */}
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Sandwich Size: </Text>
          <RadioGroup
            radioButtons={props.sizeRadioButtons}
            onPress={props.onSetSizeId}
            selectedId={props.sizeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabel}
          />
        </View>

        {/* Bread Options */}
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Bread Type: </Text>
          <RadioGroup
            radioButtons={props.breadRadioButtons}
            onPress={props.onSetBreadId}
            selectedId={props.breadId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabel}
          />
        </View>

        {/* Upper Portion of the Form Container */}
        <View style={styles.rowContainer}>
          {/* Meat Options */}
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Meat Type:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.meats.map((item) => {
                return (
                  <BouncyCheckBox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetMeats.bind(this, item.id)}
                    textStyle={{
                      textDecorationLine: "none",
                      color: Colors.primary500,
                      fontFamily: "Note",
                    }}
                    innerIconStyle={{
                      borderRadius: 0,
                      borderColor: Colors.primary500,
                    }}
                    iconStyle={{
                      borderRadius: 0,
                    }}
                    fillColor={Colors.primary500}
                    style={styles.checkBox}
                  />
                );
              })}
            </View>
          </View>

          {/* Sauce Options */}
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Sauce Type:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.sauces.map((item) => {
                return (
                  <BouncyCheckBox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetSauces.bind(this, item.id)}
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

        {/* Middle Portion of the Form Container */}
        <View style={styles.rowContainer}>
          {/* Vegetable Options */}
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Vegetable Type:</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.vegetables.map((item) => {
                return (
                  <BouncyCheckBox
                    key={item.id}
                    text={item.name}
                    onPress={props.onSetVegetables.bind(this, item.id)}
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

          {/* Cheese Options */}
          <View style={styles.cheeseContainer}>
            <Text style={styles.checkBoxHeader}>Cheese Size: </Text>
            <RadioGroup
              radioButtons={props.cheeseRadioButtons}
              onPress={props.onSetCheeseId}
              selectedId={props.cheeseId}
              layout="column"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabel}
            />
          </View>
        </View>

        {/* Lower Portion of the Form Container */}
        <View style={styles.rowContainer}>
          {/* Add On Options */}
          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Double Meat</Text>
              <Switch
                onValueChange={props.onSetDoubleMeat}
                value={props.doubleMeat}
                thumbColor={
                  props.doubleMeat ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
              />
            </View>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Double Cheese</Text>
              <Switch
                onValueChange={props.onSetDoubleCheese}
                value={props.doubleCheese}
                thumbColor={
                  props.doubleCheese ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
              />
            </View>
          </View>
          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Toasted</Text>
              <Switch
                onValueChange={props.onSetToasted}
                value={props.toasted}
                thumbColor={
                  props.toasted ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
              />
            </View>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Meal Combo</Text>
              <Switch
                onValueChange={props.onSetMealCombo}
                value={props.mealCombo}
                thumbColor={
                  props.mealCombo ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
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
    fontFamily: "Note",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabel: {
    fontSize: 15,
    color: Colors.primary500,
    fontFamily: "Note",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal:24, 
    paddingBottom: 20,
  },
  checkBoxContainer: {
    width: "48%",
    paddingHorizontal:12,
  },
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "Note",
    textAlign:'center',
  },
  checkBoxSubContainer: {
    padding: 2,
    width:'100%',
  },
  checkBox: {
    padding: 2,
    width:"100%",
  },
  checkBoxLabel: {
    textDecorationLine: "none",
    color: Colors.primary500,
    fontFamily: "Note",
  },
  checkBoxInnerStyle: {
    borderRadius: 0,
    borderColor: Colors.primary500,
  },
  checkBoxIconStyle: {
    borderRadius: 0,
  },
  cheeseContainer: {
    width: "50%",
    alignItems: "flex-start",
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "Note",
  },
  buttonContainer:{
    alignItems:'center',
  }
});
