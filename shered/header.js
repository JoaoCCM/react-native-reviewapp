import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({ navigation, title }) {
    const openMenu = () => {
        navigation.openDrawer();
    };

    // não tem como colocar background no header pq a width não pega 100%

    return (
        <View
            // source={require("../assets/background.jpg")}
            style={styles.header}
        >
            {/* menu icon */}
            <MaterialIcons
                name="menu"
                size={28}
                style={styles.icon}
                onPress={openMenu}
            />

            <View style={styles.headerTitle}>
                {/* logo icon */}
                <Image
                    source={require("../assets/heart_logo.png")}
                    style={styles.headerImage}
                />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        // width e header não da certo, tive que adicionar config na homeStack e aboutStack
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        letterSpacing: 1
    },
    icon: {
        position: "absolute",
        left: -30,
        color: "white"
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: "row"
    }
});
