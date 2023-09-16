import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;
const deviceWidth = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.yellow,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontWeight: 'bold',
        // fontFamily: 'open-sans-bold',
        color: colors.yellow


    }

})