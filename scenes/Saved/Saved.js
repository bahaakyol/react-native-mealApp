import React, { useState, useEffect } from "react";
import { View, SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { useTheme } from "@react-navigation/native";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyView = () => {
  return (
    <View style={styles.listEmpty}>
      <MaterialCommunityIcons name="file-find" size={120} color="black" />
      <Text style={styles.emptyText}>NOT FOUND</Text>
    </View>
  );
};

const SavedScreen = () => {
  const FETCH_BASE = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const { savedMeals } = useSelector((state) => state.meal);

  console.log('savedMeals:', savedMeals);
  
  const fetchSingleMeal = async (meal_id) => {
    await fetch(`${FETCH_BASE}${meal_id}`)
    .then((response) => response.json())
    .then((response) => {
      const meal = response.meals;
      setData(prev => [...prev, meal[0]]);
    });
  }

  
  const fetchAPI = async () => {
    setData([]);
    setLoading(true);
  
    const promises = savedMeals.map(async (meal) => {
      console.log('meal:', meal);
      await fetchSingleMeal(meal);
    });
    await Promise.all(promises);
    setLoading(false);
  };

  const renderItem = ({ item }) => {
    return (
      <Card
        name={item.strMeal}
        image={item.strMealThumb}
        meal_id={item.idMeal}
        detail
      />
    );
  };

  useEffect(() => {
    fetchAPI();
  }, [savedMeals]);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.screen }]}
    >
      <View style={styles.inputContainer}>
        {/* <TextInput
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
            },
          ]}
          placeholder="Search a meal"
          placeholderTextColor={"gray"}
          value={search}
          onChangeText={setSearch}
          autoCorrect={false}
        /> */}
      </View>
      <View style={styles.flatList}>
        <FlashList
          data={data ?? []}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          estimatedItemSize={25}
          ListEmptyComponent={EmptyView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    backgroundColor: "transparent",
  },
  icon: {
    zIndex: 50,
    position: "absolute",
  },
  inputTitle: {
    fontSize: 15,
    alignSelf: "flex-start",
    marginHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: Colors.light.white,
    margin: 10,
    borderRadius: 20,
  },
  input: {
    backgroundColor: Colors.light.input,
    borderRadius: 20,
    padding: 10,
    width: "100%",
  },
  listEmpty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50%",
  },
  emptyText: {
    color: "black",
    fontSize: 25,
    marginTop: 10,
  },
});
export default SavedScreen;
