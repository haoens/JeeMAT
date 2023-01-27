import { Dimensions, StyleSheet } from "react-native";
import 'intl';
import 'intl/locale-data/jsonp/ms'
import 'intl/locale-data/jsonp/en'


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

export const USER_MEGAN = {
    email: "megan@jeemat.com",
    daily_budget: 60
}

export const MYR = new Intl.NumberFormat('ms-MY', {
    style: 'currency',
    currency: 'MYR',
});

export const TIME_FORMATTER = new Intl.DateTimeFormat('en-UK', { day: 'numeric', month: 'short', year: 'numeric'})