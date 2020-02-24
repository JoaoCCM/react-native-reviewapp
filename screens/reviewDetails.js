import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { globalStyles, images } from "../styles/global";
import Card from "../shered/card";

export default function reviewDetails({ navigation }) {
    const rating = navigation.getParam("rating");

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Title: {navigation.getParam("title")}</Text>
                <Text>Info: {navigation.getParam("body")}</Text>
                <View style={styles.rating}>
                    <Text>ReviewApp rating:</Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee"
    }
});
