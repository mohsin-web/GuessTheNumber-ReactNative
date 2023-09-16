import { Text, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
function Title({ children }) {
    return (<Text style={styles.Title}>{children}</Text>
    )
}
export default Title;
const styles = StyleSheet.create({
    Title: {
        fontSize: 24,
        // fontFamily: 'open-sans-bold',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.yellow,
        borderWidth: Platform.select({ ios: 0, android: 2 }),
        borderColor: 'white',
        padding: 20,
        maxWidth: '80%',

    }
});