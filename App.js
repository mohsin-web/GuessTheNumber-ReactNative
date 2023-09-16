import { StyleSheet, ImageBackground, SafeAreaView, } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import colors from './constants/colors';
import GameOver from './screens/GameOver';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
// import AppLoading from 'expo-app-loading';
export default function App() {
  const [userNumber, setuserNumber] = useState();
  const [gameIsOver, setgameIsOver] = useState(true);
  const [guessRounds, setguessRounds] = useState(0);

  const [fontsloaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  // if (!fontsloaded) {
  //   return (<AppLoading />);
  // }



  function pickedNumberHandler(pickedNumber) {
    setuserNumber(pickedNumber);
    setgameIsOver(false);
  }
  function gameOverHandler(numberofRounds) {
    setgameIsOver(true);
    setguessRounds(numberofRounds);
  }
  function reStartHandler() {
    setuserNumber(null);
    setguessRounds(0);
  }

  let screen = <StartGameScreen onPicked={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} ongameOver={gameOverHandler} />
  }
  if (gameIsOver && userNumber) {
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onRestart={reStartHandler} />
  }

  return (<>
    <StatusBar style='light' />
    <LinearGradient colors={[colors.purple1, colors.yellow]} style={styles.rootContainer}>

      <ImageBackground
        source={require('./assets/images/background.jpg')}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImg}>

        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>

    </LinearGradient>
  </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  backgroundImg: {
    opacity: 0.15,
  }
})
