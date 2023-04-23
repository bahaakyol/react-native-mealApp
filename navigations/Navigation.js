import Launch from "../scenes/Launch/Launch";
import Login from "../scenes/Login/Login";
import Signup from "../scenes/Signup/Signup";
import MealDetail from "../scenes/MealDetail/MealDetail";
import HomeNavigator from "../scenes/Home/HomeNavigator";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { checkSavedMeals } from "../store/reducers/mealReducer";
import CategoryDetail from "../scenes/CategoryDetail/CategoryDetail";

export const globalNavigation = createNavigationContainerRef();
const Stack = createNativeStackNavigator();

export default Navigation = ({ theme }) => {
  
  return (
    <NavigationContainer ref={globalNavigation} theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Launch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="HomeNavigator"
          component={HomeNavigator}
          // sharedElements={(route) => {
          //   return [route.params.meal_id];
          // }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{
            headerShown: true,
          }}
          // sharedElements={(route) => {
          //   return [route.params.meal_id];
          // }}
        />
        <Stack.Screen 
        name = "CategoryDetail"
        component = {CategoryDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
