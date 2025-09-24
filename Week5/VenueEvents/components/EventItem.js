import { View, Text, Image, StyleSheet } from "react-native";

import Colors from '../constants/colors.js';

export default function EventItem(props){
    return(
    <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.name}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={props.image}/>
        </View>
        <View style={styles.dateContainer}>
            <Text style={styles.date}>{props.date}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom:20, 
    }, 
    titleContainer: {
        backgroundColor: Colors.primary500,
        borderWidth: 3, 
        borderRadius: 5, 
    }, 
    title: {
        fontSize: 30, 
        textAlign: 'center', 
    }, 
    imageContainer: {
        alignItems: 'center', 
        borderWidth: 3, 
        borderRadius: 5, 
        backgroundColor: 'black',
    },
    image: {
        width: '100%', 
        height: 250, 
        resizeMode: 'cover',
    }, 
    dateContainer: {
        backgroundColor: Colors.primary500,
        borderWidth: 3, 
        borderRadius: 5,
    }, 
    date: {
        fontSize: 50, 
        textAlign: 'center',
        fontFamily: 'squealer-embossed',
    }

})