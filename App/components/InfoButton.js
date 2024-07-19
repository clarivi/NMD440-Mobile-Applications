import React from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const InfoButton = props => {
	return (
		<TouchableOpacity
			onPress= { () => props.navigation.navigate("BookDetail", {
        bookTitle: props.bookTitle,
        bookDescription: props.bookDescription,
        bookPages: props.bookPages,
        bookGenre:props.bookGenre,
        bookAuthor:props.bookAuthor,
        bookReview:props.bookReview,
      })}
			style={ styles.button }
		>
			<Text style={ styles.buttonText }>i</Text>
		</TouchableOpacity>
	);
};
export default InfoButton
const styles = StyleSheet.create({

  button: {
    position: "relative",
    width: 40,
    height: 40,
    alignSelf: "start",
    backgroundColor: "paleturquoise",
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    x: 300,
    y: 50,

  },
  buttonText: {
      fontFamily: "Palatino-BoldItalic",
      alignSelf: "center",
      color: "teal",
      fontSize: 40,
      fontWeight:"bold"
  }
})
