import { Text, View, StyleSheet } from "react-native";
import colors from "../../constants/colors";

function LogItemList({ roundNumber, guess }) {
    return (
        <View style={styles.itemlist}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess:{guess}</Text>
        </View>
    )
}
export default LogItemList;
const styles = StyleSheet.create({
    itemlist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        borderWidth: 2,
        borderRadius: 40,
        backgroundColor: colors.yellow,
        borderColor: colors.purple1,
        padding: 12,
        marginVertical: 10,
    },
    itemText: {
        color: colors.purple1,
        fontSize: 20,

    }

})