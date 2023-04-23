import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { globalNavigation } from "../../navigations/Navigation";

const Card = (props) => {
  const { image, name, meal_id, detail } = props;
  const theme = useTheme();

  const handlePress = () => {
    detail && globalNavigation.navigate("MealDetail", { meal_id });
    console.log(name)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.recipeCard,
          { backgroundColor: theme.colors.cardBackground },
        ]}
      >
        <Image
          resizeMode="cover"
          source={{ uri: image }}
          style={styles.recipeImage}
        />

        <Text style={[styles.recipeName, { color: theme.colors.text }]}>
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  recipeCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 5,
  },
  recipeImage: {
    width: 320,
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 8,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default React.memo(Card)
