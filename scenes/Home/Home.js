import React from "react";
import { SafeAreaView, StyleSheet  } from "react-native";
import { useEffect, useState } from "react";
import Colors from "../../theme/Colors/Colors";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { FlashList } from "@shopify/flash-list";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState(false);

  const fetchAPI = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((response) => setData(response.categories));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlashList
        data={data}
        estimatedItemSize={14}
        renderItem={({ item }) => {
          return (
            <CategoryCard
              meal_id={item.idMeal}
              image={item.strCategoryThumb}
              name={item.strCategory}
              detail
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: Colors.light.input,
  },
});
