import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(50,20,20 , 0.9)",
    borderRadius: 20,
    marginTop: 30,
    padding: 10,
    width: "40%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default React.memo(Button);
