import SubmitButton from "./SubmitButton";
import Input from "./Input";
import {React, useState} from "react";
import {View, Text,KeyboardAvoidingView } from "react-native";
import firebase from "firebase";
const LoginForm = props => {
  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");
    const logInUser = () => {
      props.showLoading()
    firebase.auth()
    .signInWithEmailAndPassword( email, password)
    .then(
      () => {
        //handle returning user
        props.acceptUser(email);
      }
    )
    .catch(
      () =>{firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        () => {
          //handle new user
          props.acceptUser(email);
        }
      )
      .catch(
        () => {
          //handle bad user
          props.rejectUser();
          firebase.auth().signOut();
        }
      )
      }
    )
  };
  return (
    <View>
      <Input
        label="Email: "
        value={email}
        placeholder="connor@example.com"
        onChangeText={email => setEmail(email)}
      />
      <Input
        label="Password: "
        value={password}
        placeholder=" Enter Password Here"
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        />
      <SubmitButton whenPressed={logInUser}>
        Login or Register
      </SubmitButton>
    </View>
  )
}

export default LoginForm;