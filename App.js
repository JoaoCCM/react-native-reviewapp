import React, { useState } from "react";
// import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";

import Home from "./screens/home";
import Navigator from "./routes/drawer";

//loading fonts
const getFonts = () => {
    return Font.loadAsync({
        "montserrat-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-semibold": require("./assets/fonts/Montserrat-SemiBold.ttf")
    });
};

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if (fontsLoaded) {
        return <Navigator />;
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontsLoaded(true)}
            />
        );
    }
}
