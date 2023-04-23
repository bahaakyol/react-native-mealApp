import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute, useTheme, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedMeal, addSavedMeal, setSavedMeals} from "../../store/reducers/mealReducer";

const LoadingContainer = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

const MealDetail = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const mealRef = useRef(null);
  const route = useRoute();
  const theme = useTheme();
  const FETCH_BASE = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
  const meal_id = route.params?.meal_id;
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  const { savedMeals } = useSelector((state) => state.meal);
  // url: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

  const fetchMeal = async () => {
    await fetch(`${FETCH_BASE}${meal_id}`)
      .then((res) => res.json())
      .then((res) => {
        mealRef.current = res.meals[0];
      });
  };

  const checkMealSaved = () => {
    if (savedMeals.includes(meal_id)) {
      setSaved(true);
    }
  };

  useEffect(() => {
    checkMealSaved();
  }, [meal_id]);

  
  const saveItem = () => {
    dispatch(addSavedMeal(meal_id));
  };

  const deleteItem = () => {
    dispatch(removeSavedMeal(meal_id));
  };

  const handleSave = useCallback(() => {
    if (saved) {
      deleteItem();
    } else {
      saveItem();
    }
    setSaved((prev) => !prev)
  }, [saveItem, deleteItem, saved]);

  

  const icon = () => {
    return (
      <MaterialIcons
        name={saved ? "favorite" : "favorite-border"}
        size={24}
        color="red"
      />
    );
  };

  useLayoutEffect(() => {
    !loading &&
      navigation.setOptions({
        headerShown: true,
        title: String(mealRef.current.strMeal).trim(),
        headerRight: () => (
          <TouchableOpacity onPress={handleSave}>{icon()}</TouchableOpacity>
        ),
      });
  }, [loading, saved]);

  useEffect(() => {
    fetchMeal().finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading || !mealRef.current ) {
    return <LoadingContainer />;
  }

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContainer}
    >
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: mealRef.current.strMealThumb }}
        />
      </View>

      <View style={styles.description}>
        <Text style={[styles.descText, { color: theme.colors.text }]}>
          {mealRef.current.strInstructions}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginVertical: 10,
  },
  descText: {
    textAlign: "justify",
    fontSize: 16,
    fontStyle: "italic",
  },
  mealHeading: {},
  imageContainer: {},
  description: {
    padding: 5,
  },
  ingredients: {},
});
export default MealDetail;
