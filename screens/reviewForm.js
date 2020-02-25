import React from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: "" }}
                onSubmit={addReview}
            >
                {formikProps => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handleChange("title")}
                            value={formikProps.values.title}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={formikProps.handleChange("body")}
                            value={formikProps.values.body}
                        />
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange("rating")}
                            value={formikProps.values.rating}
                            keyboardType="numeric"
                        />
                        <View style={styles.btn}>
                            <Button
                                title="Submit"
                                color="maroon"
                                onPress={formikProps.handleSubmit}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        width: 150,
        padding: 10,
        alignSelf: "center",
        borderRadius: 6
    }
});
