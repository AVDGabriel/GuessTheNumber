import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {

    const { roundsNumber, userNumber, onRestart } = props;


    return (
        <View style={styles.screen}>
            <TitleText>
                The game is over!
            </TitleText>
            <View style={styles.imageContainer}>
                {/** Local images are loaded with the required function. */}
                <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover' />
            </View>
            <BodyText>
                Number of rounds: {roundsNumber}
            </BodyText>
            <BodyText>
                Number was: {userNumber}
            </BodyText>
            <Button title="RESTART" onPress={onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
});

export default GameOverScreen;