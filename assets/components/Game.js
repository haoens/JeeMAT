import { View, StyleSheet, Text } from "react-native"

export default function Game(){

    return (
        <View style={styles.wrapper}>
            <View style={styles.background}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    background: {
        flex:1,
        backgroundColor:'#65D8EC'
    }

})