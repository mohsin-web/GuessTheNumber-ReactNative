import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../constants/colors";
function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOutterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: colors.purple2 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;
const styles = StyleSheet.create({
    buttonOutterContainer: {
        borderRadius: 26,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: colors.purple3,
        paddingVertical: 8,
        paddingHorizontal: 16,

    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})