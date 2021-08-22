import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MainScreen from "./src/screens/MainScreen";
import SuccessScreen from "./src/screens/SuccessScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainScreen,
    Success: SuccessScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default () => {
  return (
    <App />
  );
};

const App = createAppContainer(navigator);
