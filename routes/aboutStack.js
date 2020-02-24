import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import About from "../screens/about";
import Header from "../shered/header";

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => (
                    <Header navigation={navigation} title="About ReviewApp" />
                )
            };
            // headerStyle: { backgroundColor: "#c1c1c1" }
        }
    }

    // se não especificar navigationOptions,
    //  ele assume como valor defaul o nome da screen
};

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#333", height: 70 }
    }
});

export default AboutStack;
