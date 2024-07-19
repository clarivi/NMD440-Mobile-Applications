import { Text, SafeAreaView, StyleSheet, View, Button, Alert, KeyboardAvoidingView } from 'react-native';
import {React, useState} from "react";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import firebase from "firebase"
import { useNavigation } from '@react-navigation/native';

const AddBook = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPages, setBookPages] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookReview, setBookReview] = useState("");
  const navigation = useNavigation();
  
  const addRecord = () => {
    firebase.database().ref("books").push({
      bookTitle,
      bookAuthor,
      bookPages,
      bookGenre,
      bookDescription,
      bookReview,
    })
    Alert.alert(`Your book, ${bookTitle}, has been successfully submitted!`)
    navigation.navigate("Books")

  }
  return(
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <Input
        label="Name:"
        placeholder="Title of the book."
        value={bookTitle}
        onChangeText={bookTitle => setBookTitle(bookTitle)}
      />

      <Input
        label="Author:"
        placeholder="Author of the book."
        value={bookAuthor}
        onChangeText={bookAuthor => setBookAuthor(bookAuthor)}
      />

      <Input
        label="Pages:"
        placeholder="# of pages."
        value={bookPages}
        onChangeText={bookPages => setBookPages(bookPages)}
      />

      <Input
        label="Genre:"
        placeholder="The genre of the book."
        value={bookGenre}
        onChangeText={bookGenre => setBookGenre(bookGenre)}
      />
      <Input
        label="Description:"
        placeholder="A Short description."
        value={bookDescription}
        onChangeText={bookDescription => setBookDescription(bookDescription)}
      />
      <Input
        label="Review:"
        placeholder="What did you think?"
        value={bookReview}
        onChangeText={bookReview => setBookReview(bookReview)}
      />
      <SubmitButton whenPressed={addRecord}> Add Book to Library </SubmitButton>
      </View>
    </View>
  )
}

export default AddBook;

styles = StyleSheet.create ({
  screen:{
    flex: 1,
    backgroundColor: "teal",
    padding:10,

  },
  inputContainer: {
    backgroundColor: "paleturquoise",
    padding: 20,
    borderRadius: 10,

  }
});