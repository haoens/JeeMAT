import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { FONTS } from "../constants"

export default function Navbar({ title, position, hidePeriods }){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={FONTS.header}>
                {title}
            </Text>
            { 
                !hidePeriods &&
                <View style={styles.tabPeriods}>
                {[1,2,3].map((value, index) => {
                    return (
                        <View 
                            key={index}
                            style={(position === value) ?
                                 styles.tabPeriodActive : 
                                 styles.tabPeriod}>
                        </View>
                    )
                })}
                </View>
            }
        </SafeAreaView>
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

