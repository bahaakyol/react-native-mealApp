import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import Card from "../../components/Card/Card.js";
import { useTheme , useNavigation} from "@react-navigation/native";
import CategoryCard from "../../components/CategoryCard/CategoryCard.js";

const CategoryDetail = ({ route }) => {
  const theme = useTheme();
  const categoryTitle = route.params.name;
  const BASE_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
  const navigation = useNavigation()
  const [categoryData, setCategoryData] = useState([]);

  useEffect(()=> {
    navigation.setOptions({
      title : String(categoryTitle)
    })
  }, [])

  const fetchAPI = () => {
    fetch(`${BASE_URL}${categoryTitle}`)
      .then((response) => response.json())
      .then((res) => setCategoryData(res.meals))
      .catch((error) => console.log("Problem: ", error));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Card
        meal_id={item.idMeal}
        image={item.strMealThumb}
        name={item.strMeal}
        detail
      />
    );
  };
  return (
    <View style={[styles.container,{backgroundColor : theme.colors.screen}]}>
      <FlashList
        data={categoryData ?? []}
        renderItem={renderItem}
        keyExtractor={(item) => item.idMeal}
        estimatedItemSize={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CategoryDetail;
