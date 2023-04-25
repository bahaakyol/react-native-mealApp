import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { auth } from "../../config/firebase";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const {savedMeals} = useSelector(state => state.meal)
  const theme = useTheme();
  return (
    
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.screen,
          },
        ]}
      >
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={{
              uri: auth.currentUser.photoURL,
            }}
          />
          
        </View>
        <Text style={styles.title}>{auth.currentUser.displayName}</Text>
            <View style = {styles.menuContainer}>
            <View style = {[styles.section, {backgroundColor : theme.colors.card}]}>
              <Text style = {{color : theme.colors.text}}>email Address: {auth.currentUser.email} </Text>
            </View>
            <View style = {[styles.section, {backgroundColor : theme.colors.card}]}>
              <Text style = {{color : theme.colors.text}}>Saved Meals : {savedMeals.length}</Text>
            </View>
            <View style = {[styles.section, {backgroundColor : theme.colors.card}]}>
              <Text style = {{color : theme.colors.text}}>Change Password</Text>
            </View>
            <View style = {[styles.section, {backgroundColor : '#EF4444'}]}>
              <Text style = {{color : theme.colors.text ,fontWeight : 'bold'}}>Logout</Text>
            </View>
            </View>
      </View>
      
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  profile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "red",
    marginTop: "20%",
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    marginTop: "10%",
  },
  section: {
    justifyContent : 'center',
    alignItems : 'center',
    width: "90%",
    height: 60,
    backgroundColor: "40ff35",
    marginVertical : 5,
    borderWidth : 1,
    borderRadius : 20,
  },
  menuContainer : {
    flex: 1,
    width: '100%',
    marginTop : 30,
    alignItems :'center'
  }
  
});

export default ProfileScreen;
