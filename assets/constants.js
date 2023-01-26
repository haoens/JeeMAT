import { Dimensions, StyleSheet } from "react-native";
import 'intl';
import 'intl/locale-data/jsonp/ms'

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

export const TEST_USER = {
    email: "testuser@email.com",
    daily_budget: 60
}

export const MYR = new Intl.NumberFormat('ms-MY', {
    style: 'currency',
    currency: 'MYR',
});