import { View, StyleSheet, useColorScheme } from "react-native";
import React from "react";
import Colors from "../../../theme/Colors/Colors";

const Container = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.light.container,
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return <View style= {styles.container}
  >{props.children}
  </View>;
};

export default Container;
