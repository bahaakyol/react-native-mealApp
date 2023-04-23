import React, { useCallback } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { globalNavigation } from "../../navigations/Navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { addListener } from "@reduxjs/toolkit";

const RandomCard = (props) => {
  const {
    image,
    name,
    meal_id,
    detail,
    category,
    area,
  } = props;
  const theme = useTheme();

  const handlePress = useCallback(() => {
    detail && globalNavigation.navigate("MealDetail", { meal_id });
  }, []);

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
        <View style={styles.category}>
          <MaterialCommunityIcons
            name="food-variant"
            size={24}
            color={theme.colors.text}
          />
          <Text
            style={[
              styles.categoryText,
              { color: theme.colors.text, fontWeight: "bold" },
            ]}
          >
            Category :
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.text }]}>
            {category}
          </Text>
        </View>
        <View style={styles.category}>
          <MaterialIcons name="place" size={24} color={theme.colors.text} />
          <Text
            style={[
              styles.categoryText,
              { color: theme.colors.text, fontWeight: "bold" },
            ]}
          >
            Area :
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.text }]}>
            {area}
          </Text>
        </View>

        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignSelf: "center",
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
  category: {
    flexDirection: "row",
    padding: 10,
  },
  categoryText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default RandomCard;
