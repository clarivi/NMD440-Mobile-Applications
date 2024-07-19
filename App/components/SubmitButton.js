import { Text, StyleSheet, TouchableOpacity} from "react-native" ;
import React from "react";

const SubmitButton = props => {
  return (
    <TouchableOpacity onPress ={props.whenPressed} style ={styles.button}>

      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton;
const styles = {
  button: {
    borderColor: "teal",
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    padding: 5,
    backgroundColor: "teal",
  },
  buttonText: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  }
};
  
