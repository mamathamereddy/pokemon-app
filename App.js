/*import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
const navigator = createStackNavigator(
  {
    Home: SearchScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Pokemon",
    },
  }
);

export default createAppContainer(navigator);*/

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Pokemons from "./src/components/Pokemon";
import Details from "./src/components/Details";

const appNavigator = createStackNavigator(
  {
    Home: {
      screen: Pokemons,
    },
    Details: {
      screen: Details,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Pokemon",
    },
  }
);

const AppContainer = createAppContainer(appNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
