import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BodyText = props => {
    return (
        <Text style={{ ...props.style, ...styles.body }}>
            {/* Use this if you want to pass values btween the body tags of the text.*/}
            {props.children}
        </Text>
    );
};

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans-bold'
    }
});

export default BodyText;