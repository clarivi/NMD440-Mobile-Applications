import {React, useState, useEffect} from "react"
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from '../components/Card.js';
import {books} from "../data/books"
import firebase from "firebase"
export default function App() {
  const navigation = useNavigation();
  const [books, setBooks] = useState([]);
  useEffect(
  	() => {
  		firebase
  		.database()
  		.ref( "books" )
  		.on(
  			"value",
  			( snapshot ) => {
  				setBooks( snapshot.toJSON() );
  			}
  		);
  	}, []
  );

  const bookObjects = [];
  for (var bookID in books) {
    bookObjects.push(books[bookID])
  }
  bookObjects.reverse();
  const renderBooks = () => {
         return bookObjects.map( (book) => (
        <Card
           title={book.bookTitle}
           author={book.bookAuthor}
           pages={book.bookPages}
           genre={book.bookGenre}
           description={book.bookDescription}
           review={book.bookReview}
        />
      )
    );
      
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.view1}>
      <Text style={styles.paragraph}>
        My Library
      </Text>
      </View>
      {renderBooks()}
    </ScrollView>
    <Button title="Add to Library" color="teal" onPress={ () => navigation.navigate("AddBook")}> </Button>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'powderblue',
    overflow: "scroll"
  },
  paragraph: {
    margin: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  view1: {
    borderWidth: 3,
    borderRadius: 4,
    backgroundColor: "cadetblue",
    margin: "2%"

  },
  /*  shadowed: {
    textShadowColor: 'black',
    fontWeight: "bold",
    textShadowRadius: 9,
    textShadowOffset: { width: -2, height: 4},
  },

  text1: {
    fontFamily: 'serif',
    fontSize: 20,

  },

  text2: {
    textAlign: "right",
    fontStyle: "italic",
    fontSize: 10
  },
  text3: {
    fontFamily: "serif",
    textAlign: "left",
    fontWeight: "bold",
    fontVariant: "small-caps",
    fontSize: 25,
    color: "green"
  },

  view2: {
    backgroundColor: "azure",
    justifyContent: "center",
    width: "70%",
    height: '20%',
    margin: "5% 2% 0%",
    padding: '1em',
    border: "2px solid grey",
    borderRadius: "5%",

  },
  view3: {
    borderWidth: "1px",
    borderColor: "grey",
    margin:  "5% 2% 0% 2%",
    width: "70%",
    height: "20%",
    alignSelf: "flex-end",
    justifyContent: "center",
    padding: '1em',
  }*/
});
