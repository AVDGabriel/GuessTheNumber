import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, Text, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    //Object destructuring.
    const { roundsNumber, userNumber, onRestart } = props;

    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceHeight(Dimensions.get('window').height);
            setAvailableDeviceWidth(Dimensions.get('window').width);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>
                    The game is over!
            </TitleText>
                <View style={{
                    ...styles.imageContainer, ...{
                        width: availableDeviceWidth * 0.7,
                        height: availableDeviceWidth * 0.7,
                        borderRadius: (availableDeviceWidth * 0.7) / 2,
                        marginVertical: availableDeviceHeight / 30
                    }
                }}>
                    {/** Local images are loaded with the required function. */}
                    {/* <Image source={require('../assets/success.png')} style={styles.image} resizeMode='cover' /> */}
                    <Image
                        fadeDuration={2000}
                        source={{ uri: 'https://png.pngtree.com/png-vector/20200601/ourmid/pngtree-game-over-illustration-for-t-shirt-design-png-image_2217283.jpg' }}
                        style={styles.image} resizeMode='cover' />
                </View>
                <View style={{
                    ...styles.resultContainer, ...{
                        marginVertical: availableDeviceHeight / 60
                    }
                }}>
                    <BodyText style={{
                        ...styles.resultText, ...{
                            fontSize: availableDeviceHeight < 400 ? 16 : 20
                        }
                    }}>
                        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
                    </BodyText>
                </View>
                <MainButton onPress={onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden'
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
        marginHorizontal: 50
    },
    resultText: {
        textAlign: 'center'
    }
});

export default GameOverScreen;