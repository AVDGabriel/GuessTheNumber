import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import Card from "../components/Card";
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonwidth] = useState(Dimensions.get('window').width / 4);

    const numberInputHandler = inputText => {
        //Replace all non number values with an empty string.      
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    useEffect(() => {
        const updateLayout = () => {
            setButtonwidth(Dimensions.get('window').width / 4);
        };

        Dimensions.addEventListener("change", updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', "Number has to be a number between 1 and 99",
                [{ text: "Ok", style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summary}>
                <BodyText>You selected </BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={() => props.onStartGame(selectedNumber)} >
                    START GAME
                </MainButton>
            </Card>
        );
    };

    return (
        <ScrollView>
            {/* Use this component if you want to be sure that the keyboard never 
            overlayes the input you are typing in. */}
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                {/* TouchableWithoutFeedback is used with the onPress event to close the keyboard 
        whenever the user clicks outside of an inputText. */}
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss();
                }}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>
                            Start a new Game!
                    </TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText>
                                Select a number
                    </BodyText>
                            <Input style={styles.input}
                                blurOnSubmit
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="numeric"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue} />
                            <View style={styles.buttonContainer}>
                                <View style={{ marginRight: 3, width: buttonWidth }}>
                                    <Button title='Reset' onPress={resetInputHandler}
                                        color={Colors.accent} />
                                </View>
                                <View style={{ width: buttonWidth }}>
                                    <Button title='Confirm' onPress={confirmInputHandler}
                                        color={Colors.primary} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: "80%",
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input: {
        width: '100%',
        textAlign: 'center'
    },
    summary: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;
