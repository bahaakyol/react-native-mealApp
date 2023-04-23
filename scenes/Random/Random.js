import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import RandomCard from "../../components/randomCard/randomCard";


const RandomScreen = () => {
  const FETCH_BASE = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  const [data, setData] = useState([]);

  const fetchAPI = () => {
    fetch(`${FETCH_BASE}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.meals ?? []);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const theme = useTheme();

  const flatRef = useRef();
  const renderItem = ({ item }) => {
    return (
      <RandomCard
        name={item.strMeal}
        image={item.strMealThumb}
        meal_id={item.idMeal}
        category={item.strCategory}
        area={item.strArea}
        detail
      />
    );
  };

  const handlePress = () => {
    flatRef.current &&
      flatRef.current.scrollToIndex({
        index: Math.floor(Math.random() * 15),
        animated: true,
      });
  };

  return (
    <SafeAreaView
      style={[styles.screen, { backgroundColor: theme.colors.screen }]}
    >
      <Text
        style={{
          fontSize: 33,
          marginTop: "20%",
          margin: 10,
          color: theme.colors.text,
        }}
      >
        Feeling Hungry ?
      </Text>
      <Text style={{ fontSize: 16, color: theme.colors.text }}>
        Get a random meal by clicking the button
      </Text>

      <TouchableOpacity
        onPress={handlePress}
        style={[styles.button, { backgroundColor: theme.colors.button }]}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ color: "white", fontWeight: "bold", marginHorizontal: 10 }}
          >
            Get Meal
          </Text>
          <FontAwesome5
            name="hamburger"
            size={20}
            color={theme.colors.notification}
          />
        </View>
      </TouchableOpacity>
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled = {false}
        data={data}
        ref={flatRef}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        onScrollToIndexFailed={(info) => {
          const wait = new Promise((resolve) => setTimeout(resolve, 500));
          wait.then(() => {
            flatList.current?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },

  button: {
    height: "5%",
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },

  randomMeal: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    marginTop: 10,
  },
});

export default RandomScreen;
