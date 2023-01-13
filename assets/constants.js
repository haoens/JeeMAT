import { Dimensions, StyleSheet } from "react-native";

export const FONTS = StyleSheet.create({
    header: {
        color: "white",
        fontFamily: "Poppins-ExtraBold",
        fontSize: 16,
        alignSelf: 'center'
    }
})

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;