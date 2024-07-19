
import { Text, StyleSheet, View, Image} from "react-native" ;
import InfoButton from "./InfoButton"
import { useNavigation } from '@react-navigation/native';

const Card = ({ title, author, pages, genre, description, review }) => {
const navigation = useNavigation();
	return (
  <View style={styles.card}>
    <Image
            style={styles.icon}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/171/171322.png',
            }}
          />
		<Text style={styles.bookTitle}>{title} </Text>
    <Text style={styles.bookInfo}>by {author} </Text>
    <Text style={styles.bookInfo}>{pages} pages</Text>
    <Text style={styles.bookInfo}>{genre}</Text>
    <InfoButton
        navigation={navigation}
        bookTitle={title}
        bookDescription={description}
        bookPages={pages}
        bookGenre={genre}
        bookAuthor={author}
        bookReview={review}
        />
  </View>
	);
} ;

export default Card;

const styles = StyleSheet.create({
   
	bookTitle: {
		fontSize: 20 ,
    fontWeight: 'Bold',
    width: "400px",
	},
  bookInfo: {
    fontSize: 15,
    
  },
  card: {
    backgroundColor: "azure",
    justifyContent: "center",
    width: "90%",
    margin: "5% 2% 0%",
    padding: '2%',
    borderWidth: 2,
    borderRadius: "5%",
    flexWrap: "wrap"
  },
  icon: {
    borderRadius: "0%",
    borderWidth: "0px",
    width: "50px",
    height: "50px",
  }
}) ;