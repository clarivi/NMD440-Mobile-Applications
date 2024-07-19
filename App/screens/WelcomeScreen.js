import {React, useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Text, Button, StyleSheet, Alert, KeyboardAvoidingView } from "react-native";
import SubmitButton from "../components/SubmitButton";
import LoginForm from "../components/LoginForm";
import Spinner from "../components/Spinner";
export default function WelcomeScreen( {navigation}) {
  const [isLoading, setIsLoading ] = useState(false);
  const showLoading = () => {
    setIsLoading(true);
  }
  const hideLoading = () => {
    setIsLoading(false);
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountName, setAccountName] = useState("");
  const acceptUser = (email) => {
    setIsLoggedIn(true);
    Alert.alert(`Welcome back, ${email}!`);
    setAccountName(email);
    hideLoading();
  };
  const rejectUser = () => {
    setIsLoggedIn(false);
    Alert.alert('Incorrect credentials')
    hideLoading();
  };
    return (
      !isLoading ? 
      (
        <View style = {styles.welcome}>
        <Text>{accountName}</Text>
          {!isLoggedIn 
          ? (<LoginForm 
                acceptUser={acceptUser} 
                rejectUser={rejectUser}
                showLoading={showLoading}
                hideLoading={hideLoading} /> )

          :( <SubmitButton whenPressed ={ () => navigation.navigate("Books")}>
         See Books
         </SubmitButton>
         ) }
         </View>
      )
      :
      (<Spinner/>)

    );

}
const styles = StyleSheet.create({
  welcome:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "paleturquoise"
  },
  form: {
    marginTop: "100px"
  }
});
