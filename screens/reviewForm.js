import React from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";

import FlatButton from "../shered/button";

const ReviewSchema = yup.object({
    title: yup
        .string()
        .required()
        .min(4),
    body: yup
        .string()
        .required()
        .min(8),
    rating: yup
        .string()
        .required()
        .test("is-num-1-5", "Rating must be a number 1-5", val => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
});

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                validationSchema={ReviewSchema}
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
                            onBlur={formikProps.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.title &&
                                formikProps.errors.title}
                        </Text>

                        <TextInput
                            multiline
                            minHeight={70}
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={formikProps.handleChange("body")}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur("body")}
                        />

                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.body &&
                                formikProps.errors.body}
                        </Text>
                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder="Rating (1-5)"
                            onChangeText={formikProps.handleChange("rating")}
                            value={formikProps.values.rating}
                            keyboardType="numeric"
                            onBlur={formikProps.handleBlur("rating")}
                        />

                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.rating &&
                                formikProps.errors.rating}
                        </Text>
                        <View style={styles.btn}>
                            <FlatButton
                                text="Submit"
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
