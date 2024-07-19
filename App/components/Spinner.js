import react from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
const Spinner = () => {
  return (
    <View style ={styles.spinnerContainer}>
      <ActivityIndicator
        size = "large"
        color = "black"/>
    </View>
  )}

  export default Spinner;
  const styles = StyleSheet.create({
    spinnerContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  })