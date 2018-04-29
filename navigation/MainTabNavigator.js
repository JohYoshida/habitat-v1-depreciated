import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabNavigator, TabBarBottom } from "react-navigation";

import Colors from "../constants/Colors";

import HomeScreen from "../screens/HomeScreen";
// import LinksScreen from '../screens/LinksScreen';
// import SettingsScreen from '../screens/SettingsScreen';
import QuotesScreen from "../screens/QuotesScreen";
import JournalScreen from "../screens/JournalScreen";
import HabitsScreen from "../screens/HabitsScreen";
import IdeasScreen from "../screens/IdeasScreen";

export default TabNavigator(
  {
    // Home: {
    //   screen: HomeScreen,
    // },
    // Links: {
    //   screen: LinksScreen,
    // },
    // Settings: {
    //   screen: SettingsScreen,
    // },
    Quotes: {
      screen: QuotesScreen
    },
    Journal: {
      screen: JournalScreen
    },
    Habits: {
      screen: HabitsScreen
    },
    Ideas: {
      screen: IdeasScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Home":
            iconName =
              Platform.OS === "ios"
                ? `ios-information-circle${focused ? "" : "-outline"}`
                : "md-information-circle";
            break;
          case "Links":
            iconName =
              Platform.OS === "ios"
                ? `ios-link${focused ? "" : "-outline"}`
                : "md-link";
            break;
          case "Settings":
            iconName =
              Platform.OS === "ios"
                ? `ios-options${focused ? "" : "-outline"}`
                : "md-options";
            break;
          case "Quotes":
            iconName =
              Platform.OS === "ios"
                ? `ios-egg${focused ? "" : "-outline"}`
                : "md-egg";
            break;
          case "Journal":
            iconName =
              Platform.OS === "ios"
                ? `ios-book${focused ? "" : "-outline"}`
                : "md-book";
            break;
          case "Habits":
            iconName =
              Platform.OS === "ios"
                ? `ios-cafe${focused ? "" : "-outline"}`
                : "md-cafe";
            break;
          case "Ideas":
            iconName =
              Platform.OS === "ios"
                ? `ios-bulb${focused ? "" : "-outline"}`
                : "md-bulb";
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);
