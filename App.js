import Navigation from "./navigations/Navigation";
// import { StatusBar } from "expo-status-bar";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#121212",
    screen: "rgba(255,198,136,0.3)",
    text: "#fff",
    card: "#1c1c1c",
    border: "#bababa",
    line: "#fff",
    cardBackground: "#212121",
    button: "rgb(4,196,238)",
    notification: "#fff",
  },
};

const MyLigthTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: "#000",
    screen: "rgba(255,198,136,0.3)",
    button: "rgb(4,196,238)",
    card: "#fff",
    line: "#000",
    cardBackground: "#fff",
    notification: "#000",
  },
};

export default App = () => {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? MyDarkTheme : MyLigthTheme;
  return (
    <Provider store={store}>
      <Navigation theme={theme} />
      {/* <StatusBar style="auto"/> */}
      <StatusBar backgroundColor={"#1c1c1c"}/>
    </Provider>
  );
};
