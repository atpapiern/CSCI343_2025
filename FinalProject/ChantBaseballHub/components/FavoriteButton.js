import {Ionicons} from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from "../constants/colors";

export default function FavoriteButton(props) {
  if (props.isFavorite) {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="star" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    return (
      <Pressable onPress={props.onPress}>
        <Ionicons name="star-outline" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}
