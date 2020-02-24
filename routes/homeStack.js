import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shered/header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="ReviewApp" />
                )
                // headerStyle: { backgroundColor: "#c1c1c1" }
            };
        }
    },

    // se não especificar navigationOptions,
    //  ele assume como valor defaul o nome da screen

    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Review Details"
            // headerStyle: { backgroundColor: "#c1c1c1" }
        }
    }
};

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#333", height: 70 }
    }
});

export default HomeStack;
