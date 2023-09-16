import { Image, StyleSheet, View, Text, useWindowDimensions, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import colors from "../constants/colors";
function GameOver({ roundsNumber, userNumber, onRestart }) {
    const { width, height } = useWindowDimensions();
    let imageSize = 300
    if (width < 380) {
        imageSize = 150;
    }
    if (height < 400) {
        imageSize = 150;
    }
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }
    return (<ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>Congradulations!! You HaveSuccessfully Guessed !</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlightedText}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>

        </View>
    </ScrollView>
    )

}
export default GameOver;
// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'

    },
    imageContainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        borderWidth: 3,
        borderColor: colors.purple1,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 24
    },
    highlightedText: {
        color: colors.purple2,
        fontWeight: 'bold'
    }
})