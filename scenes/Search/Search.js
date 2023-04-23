import React, { useState, useEffect, PureComponent, useCallback } from "react";
import { View, StyleSheet, Text, FlatList, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../components/Card/Card";
import { FlashList } from "@shopify/flash-list";
import { useTheme } from "@react-navigation/native";
import Colors from "../../theme/Colors/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const EmptyView = () => {
  return (
    <View style={styles.listEmpty}>
      <MaterialCommunityIcons name="file-find" size={120} color="black" />
      <Text style={styles.emptyText}>NOT FOUND</Text>
    </View>
  );
};

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const theme = useTheme();

  const FETCH_BASE = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  const [data, setData] = useState([]);

  const fetchAPI = () => {
    fetch(`${FETCH_BASE}${search}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.meals ?? []);
      });
  };

  useEffect(() => {
    fetchAPI();
  }, [search]);

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
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.screen }]}
    >
      <View style={styles.inputContainer}>
        <TextInput
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
        />
      </View>
      <View style={styles.flatList}>
        <FlashList
          data={data ?? []}
          renderItem={renderItem}
          keyExtractor={(item) => item.idMeal}
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

export default SearchScreen;
