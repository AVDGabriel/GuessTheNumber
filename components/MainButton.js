import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {/* What is between the opening and closing tag of the MainButton component 
                    will be displayed here. */}
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;