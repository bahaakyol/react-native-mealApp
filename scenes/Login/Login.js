import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Button from "../../components/UI/Button/Button";
import Container from "../../components/UI/Container/Container";
import Input from "../../components/UI/TextInput/Input";
// import { useAuth } from "../../hooks/useAuth";
import { auth } from "../../config/firebase";


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  // const {user} = useAuth()
  // console.log(user)
  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email,password).then((user)=> {
      alert("Hosgeldiniz", user.user.email)
      navigation.navigate("HomeNavigator")
    }).catch(err => console.log(err))
  };

  const onSignupHandler = () => {
    navigation.navigate("Signup");
  };

  return (
    <Container>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Welcome Back !</Text>
      </View>
      <Input
        label="Email"
        placeholder="Enter mail"
        value={email}
        onChange={setEmail}
      />
      <Input
        label="Password"
        placeholder="Enter Password"
        value={password}
        onChange={setPassword}
        isSecure={true}
      />
      <TouchableOpacity style = {styles.password}>
      <Text style = {styles.forget}>Forgot password?</Text>
      </TouchableOpacity>
      <Button 
      title = "Login"
      onPress = {handleLogin}/>

      <View style={styles.subtextContainer}>
        <Text style={styles.subtext}>Don't have an account?</Text>
        <TouchableOpacity onPress={onSignupHandler}>
          <Text style={[styles.subtext, styles.signupLink]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: "100%",
    padding: 20,
    bottom: "10%",
  },
  title: {
    fontSize: 66,
  },
  subtitle: {
    fontSize: 33,
    opacity: 0.8,
    color: "rgba(50,20,20 , 0.9)",
  },
  forget : {
    color : "rgba(50,20,20,0.9)",
    fontSize : 13,
    marginTop : 10,
    fontStyle : 'italic'
  },
  password: {
    marginLeft: 20,
    alignSelf : 'flex-start',
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

export default Login;
