import { StyleSheet, Text, View } from "react-native"
import { FONTS } from "../constants"

export default function Navbar({ title, position }){
    return (
        <View style={styles.container}>
            <Text style={FONTS.header}>
                {title}
            </Text>
            <View style={styles.tabPeriods}>
                <View style={(position === 1) ? styles.tabPeriodActive : styles.tabPeriod}></View>
                <View style={(position === 2) ? styles.tabPeriodActive : styles.tabPeriod}></View>
                <View style={(position === 3) ? styles.tabPeriodActive : styles.tabPeriod}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    },
    tabPeriods: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center'
    },
    tabPeriod: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'gray',
        marginTop: 3,
        marginHorizontal: 3
    },
    tabPeriodActive: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'white',
        marginTop: 3,
        marginHorizontal: 3
    }
})

