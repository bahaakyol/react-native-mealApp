import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import Button from "../../components/UI/Button/Button";

export default function Launch( {navigation}) {
  
  const onClickHandler = () => {
    navigation.navigate("Login")
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/img/meal.jpg")}
      >
        <MaterialCommunityIcons
          name="chef-hat"
          size={94}
          color="rgba(50,20,20 , 0.9)"
          style={styles.chef}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hungry yet?</Text>
          <Text style={styles.subtitle}>Simplest way to find recipes</Text>
        </View>
        <View style = {styles.button}>
       <Button  
       title = "Sign In"
       onPress = {onClickHandler}/>
       </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc588",
  },
  title: {
    color: "rgba(50,20,20 , 0.9)",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    color: "#fff",
    fontSize: 21,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    zIndex: -1,
  },
  textContainer: {
    padding: 20,
    backgroundColor: "rgba(255, 198, 136, 0.8)",
    opacity: 1,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: "50%",
  },

  button: {
    flex : 1,
    width : '100%',
    alignItems: "center",
    justifyContent : 'center',
    marginBottom : '50%',
  },
  buttonText: {
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginHorizontal: 10,
    fontSize: 18,
  },
  chef: {
    alignSelf: "center",
    marginTop: "10%",
  },
});
