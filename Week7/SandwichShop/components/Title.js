import { StyleSheet, Text } from 'react-native';
import Colors from "../constants/colors.js";

function Title(props) {
    return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 45, 
    color: Colors.primary500,
    textAlign: 'center'
  },
});
