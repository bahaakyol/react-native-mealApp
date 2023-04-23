import React, { useState } from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";
import Colors from "../../../theme/Colors/Colors";

const Input = (props) => {
  const placeholder = props.placeholder;
  const label = props.label;
  const isSecure = props.isSecure ? props.isSecure : false;

  
  return (
    <View style={styles.wrapper}>
      <Text style={styles.inputTitle}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={props.value}
          onChangeText={(text)=> props.onChange(text)}
          fontSize={20}
          secureTextEntry={isSecure}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
  },

  inputTitle: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.light.white,
    margin: 10,
    borderRadius: 20,
    width: "90%",
  },
  input: {
    backgroundColor: Colors.light.input,
    borderRadius: 20,
    padding: 10,
  },
});

export default Input;
