import { Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import { useEffect } from "react";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import colors from "../constants/colors";
import LogItemList from "../components/game/LogItemList";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, ongameOver }) {
    const initialguess = generateRandomBetween(1, 10, userNumber);
    const [currentGuess, setcurrentGuess] = useState(initialguess);
    const [guessRounds, setguessRounds] = useState([initialguess]);
    const { width, height } = useWindowDimensions();
    useEffect(() => {
        if (currentGuess === userNumber) {
            ongameOver(guessRounds.length);
            minBoundary = 1;
            maxBoundary = 100;
        }
    }, [currentGuess, userNumber, ongameOver])

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry', style: 'cancel' }
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newrndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setcurrentGuess(newrndNum);
        setguessRounds(preguessrounds => [newrndNum, ...preguessrounds])
    }
    const guessRoundsListLength = guessRounds.length;

    let content = (<>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24} color={colors.yellow} /></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color={colors.yellow} /></PrimaryButton>
                </View>
            </View>

        </Card>
    </>)
    if (width > 500) {
        content = (<>
            <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
            <View style={styles.buttonContaineWide}>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color={colors.yellow} /></PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24} color={colors.yellow} /></PrimaryButton>
                </View>

            </View>

        </>)
    }
    return (
        <View style={styles.screen}>
            <Title> Opponent Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList data={guessRounds} renderItem={(itemdata) => <LogItemList roundNumber={guessRoundsListLength - itemdata.index} guess={itemdata.item} />}
                    keyExtractor={(item) => item} />
                {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
            </View>
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 20

    },
    buttonContaineWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1
    }
});