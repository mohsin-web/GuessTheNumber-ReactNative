import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.card} >{children}</View>
    )
}
export default Card;
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: colors.purple1,
        padding: 16,
        borderRadius: 8,
        marginHorizontal: 22,
        elevation: 8
    },

})