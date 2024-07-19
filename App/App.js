import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import BookScreen from './screens/BookScreen';
import BookDetailScreen from './screens/BookDetailScreen';
import AddBook from './screens/AddBook';
import firebase from "firebase";
const firebaseConfiguration = {  apiKey: "---",
  authDomain: "first-project-connorl.firebaseapp.com",
  projectId: "first-project-connorl",
  storageBucket: "first-project-connorl.appspot.com",
  messagingSenderId: "171695630220",
  appId: "1:171695630220:web:73ee3ea8363f6db32398a9",
  measurementId: "G-SJJX675C2M"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfiguration)
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: 'Welcome!',
            headerStyle: {
              backgroundColor: 'teal',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'paleturquoise',
              alignSelf: 'center',
              headerTitleAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Books"
          component={BookScreen}
          options={{
            title: 'Books',
            headerStyle: {
              backgroundColor: 'teal',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="BookDetail"
          component={BookDetailScreen}
          options={{
            title: 'Book Details',
            headerStyle: {
              backgroundColor: 'teal',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="AddBook"
          component={AddBook}
          options={{
            title: 'Add to Library',
            headerStyle: {
              backgroundColor: 'teal',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
