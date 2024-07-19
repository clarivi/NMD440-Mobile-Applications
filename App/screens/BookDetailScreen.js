import React from "react";
import {StyleSheet, View, Image, Text, Button, Linking, ScrollView} from "react-native";
const BookDetailScreen = (screen, params) => {
  const {bookTitle, bookDescription, bookGenre, bookPages, bookAuthor, bookReview } = screen.route.params

  return(
  <View style ={styles.detailScreen}>
    <Text style= {styles.heading}>Book Details</Text>
      <ScrollView style={styles.bookDetailColumn}>
        <Text style= {styles.bookName}>{bookTitle}</Text>
        <Text style= {styles.bookInfo}>by {bookAuthor}</Text>
        <Text style= {styles.bookInfo}>Genre: {bookGenre}</Text>
        <Text style= {styles.bookInfo}>{bookPages} pages</Text>
        <Text style={styles.bookInfo}>Description: {bookDescription}</Text>
        <Text style={styles.bookInfo}>Your Thoughts: {bookReview}</Text>
        <Button title="More..." color="white" onPress={ () => Linking.openURL("https://en.wikipedia.org/wiki/Pep_(dog)")}/>
      </ScrollView>
  </View>

  )}
export default BookDetailScreen;

const styles = StyleSheet.create({
  detailScreen: {
    flex: 1,
    backgroundColor: "darkslategray",
    alignItems: "center",
    color: "white",
    
  },
  bookDetailColumn: {
    flexDirection: "column",
    width: "90%",
    justifyContent: "space-between",
    backgroundColor: "teal",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "paleturquoise",
    padding: 10,
    
  },
  heading:{
    fontSize: 27,
    marginVertical: 20,
    color: "paleturquoise",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: .5,
    shadowRadius: 2,
  },
    bookName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "paleturquoise",
    overflow: "wrap"
  },
  bookInfo: {
    fontSize: 16,
    marginVertical: 4,
    color: "white"
  }
});