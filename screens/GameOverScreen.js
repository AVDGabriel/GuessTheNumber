import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {

    const { roundsNumber, userNumber, onRestart } = props;


    return (
        <View style={styles.screen}>
            <Text>
                The game is over!
            </Text>
            <Text>
                Number of rounds: {roundsNumber}
            </Text>
            <Text>
                Number was: {userNumber}
            </Text>
            <Button title="RESTART" onPress={onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;