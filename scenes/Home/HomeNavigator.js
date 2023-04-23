import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../Search/Search";
import SavedScreen from "../Saved/Saved";
import RandomScreen from "../Random/Random";
import HomeScreen from "../Home/Home";
import { FontAwesome } from "@expo/vector-icons";

const HomeNavigator = (props) => {
  const Tab = createBottomTabNavigator();

  return (
      <Tab.Navigator>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Search",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" color={color} size={size} />
            ),
          }}
          name="Search"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Saved",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="save" color={color} size={size} />
            ),
          }}
          name="Saved"
          component={SavedScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "Random",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="random" color={color} size={size} />
            ),
          }}
          name="Random"
          component={RandomScreen}
        />
      </Tab.Navigator>
  );
};

export default HomeNavigator;
