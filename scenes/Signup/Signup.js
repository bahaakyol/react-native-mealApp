import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/TextInput/Input";


const Signup = ({navigation}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onPressHandler = ( ) => {
    navigation.navigate("HomeNavigator")
  }

  return (
    <View style = {styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Let's set up your account</Text>
      </View>

      <Input
        label="Name"
        placeholder="Enter name"
        value={name}
        onChange={setName}
      />
      <Input
        label="Email"
        placeholder="Enter mail"
        value={email}
        onChange={setEmail}
      />
      <Input
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={setPassword}
        isSecure = {true}
      />
      <Input
        label="Confirm Password"
        placeholder="Enter Password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        isSecure={true}
      />
      <View style={styles.password}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onChange={setIsChecked}
          color={isChecked ? "green" : "red"}
        />
        <Text style={styles.forget}>Accept terms and Conditions</Text>
      </View>
      <View style = {styles.button}>
        <Button title="Sign Up" 
        onPress = {onPressHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: Colors.light.container,
  },
  
  titleContainer: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 33,
  },
  subtitle: {
    fontSize: 22,
    opacity: 0.8,
    color: "rgba(50,20,20 , 0.9)",
  },
  checkbox: {
    margin: 8,
  },
  button : {
    justifyContent : 'center',
    alignItems: 'center'
  },
  forget: {
    color: "rgba(50,20,20,0.9)",
    fontSize: 13,
    marginTop: 10,
  },
  password: {
    marginLeft: 20,
    flexDirection: "row",
    alignSelf: "flex-start",
  },

  subtextContainer: {
    height: "10%",
    width: "100%",
    margin: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  subtext: {
    fontSize: 22,
  },
  signupLink: {
    marginTop: 10,
    color: "blue",
  },
});

export default Signup;
