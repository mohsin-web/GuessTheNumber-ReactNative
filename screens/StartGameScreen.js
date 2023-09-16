import { TextInput, View, StyleSheet, Alert, Text, ScrollView, useWindowDimensions, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";


function StartGameScreen({ onPicked }) {
    const [enteredNumber, setenteredNumber] = useState('');
    const { width, height } = useWindowDimensions();

    function InputNumberHandler(enteredText) {
        setenteredNumber(enteredText)
    }
    function resetInputHandler() {
        setenteredNumber('');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Input',
                'The number has to be a number between 1 and 99',
                [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
            );

        }
        onPicked(chosenNumber);
    }
    const marginTopDistance = height < 380 ? 30 : 200;
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>
                    <Card >
                        <InstructionText>Enter your number</InstructionText>
                        <TextInput style={styles.input}
                            maxLength={2}
                            keyboardType='numeric'
                            value={enteredNumber}
                            onChangeText={InputNumberHandler}

                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>

                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>)
}
export default StartGameScreen;
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        // marginTop: deviceHeight < 380 ? 30 : 200,
        alignItems: 'center',
        flex: 1
    },
    input: {
        height: 50,
        fontSize: 32,
        borderBottomColor: colors.yellow,
        borderBottomWidth: 2,
        color: colors.yellow,
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',


    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
})