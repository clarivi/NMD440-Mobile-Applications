import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
const Input = props => (
  <View style={styles.inputRow}>
    <View>
      <Text>{props.label}</Text>
    </View>
    <View>
      <TextInput style={styles.input}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  </View>
);
export default Input;

const styles=StyleSheet.create({
  inputRow:  {
    flexDirection: "row",
    height: 40,
    width: 320,
    justifyContent: "space-between",
    alignItems:  "center",
  },
  input: {
    color: "black",
    paddingHorizontal: 5,
    fontSize: 18,
    alignSelf: "flex-end",
    height: 24,
    width: 230,
    backgroundColor: "azure"

  }
})