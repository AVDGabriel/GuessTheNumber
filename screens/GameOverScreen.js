import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {

    const { roundsNumber, userNumber, onRestart } = props;


    return (
        <View style={styles.screen}>
            <TitleText>
                The game is over!
            </TitleText>
            <View style={styles.imageContainer}>
                {/** Local images are loaded with the required function. */}
                {/* <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover' /> */}
                <Image
                    fadeDuration={2000}
                    source={{ uri: 'https://png.pngtree.com/png-vector/20200601/ourmid/pngtree-game-over-illustration-for-t-shirt-design-png-image_2217283.jpg' }}
                    style={styles.image} resizeMode='cover' />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={onRestart}>NEW GAME</MainButton>
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
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        // width: "80%",
        marginHorizontal: 50,
        marginVertical: 15,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;