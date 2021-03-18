import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./components/Header";
import GameScreen from './screens/GameScreen';
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    //You can use any value in the quotations.
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [selectedUserNumber, setSelectedUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    //Start async requires a function that returns a promise.
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={(err) => console.log(err)}
    />);
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setSelectedUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setSelectedUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (selectedUserNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={selectedUserNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen userNumber={selectedUserNumber} roundsNumber={guessRounds} onRestart={configureNewGameHandler} />
  };

  return (
    <View style={styles.screen}>
      <Header title='Guess a number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
