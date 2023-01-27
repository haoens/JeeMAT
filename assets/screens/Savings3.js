import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainBackground from "../components/main-background";

export default function Savings3({ navigation }) {
    function renderSavings3() {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    marginHorizontal: 35,
                    marginTop: 35
                }}
            >
                <View
                    style={{
                        flex: 0.6,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            left: 0
                        }}
                        onPress={() => navigation.navigate("Savings")}
                    >
                        <Image
                            source={require('../images/arrow.png')}
                            style={[styles.theBackButton]}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flex: 0.8,
                        marginHorizontal: 15
                    }}>
                    <Text
                        style={[styles.theQuestion]}>
                        What Do You</Text>
                    <Text
                        style={[styles.theQuestion]}>
                        Want To Save For?</Text>
                </View>

                <View style={{
                    flex: 3.3
                }}>
                    <The5buttons onPress={() => navigation.navigate('Savings1', {type: 'general_savings'})} text="General Savings" />
                    <The5buttons onPress={() => navigation.navigate('Savings1', {type: 'motor_vehicles'})} text="Motor Vehicles" />
                    <The5buttons onPress={() => navigation.navigate('Savings1', {type: 'house'})} text="House" />
                    <The5buttons onPress={() => navigation.navigate('Savings1', {type: 'marriage'})} text="Marriage" />
                    <The5buttons onPress={() => navigation.navigate('Savings1', {type: 'gadgets'})} text="Gadgets" />
                </View>

            </SafeAreaView>
        )
    }
    return (
        // The background image
        <MainBackground content={renderSavings3} />
    )
}

// button with an image and text
const The5buttons = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.the5ButtonsStyle]}>
            <Text style={[styles.the5Texts]}>{props.text}</Text>
            <Image source={require('../images/arrow.png')} style={[styles.the5ArrowButtonsStyle]} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    theBackButton: {
        transform: [{ scaleX: -1 }],
        height: 20,
        resizeMode: 'contain'
    },
    theQuestion: {
        fontSize: 24,
        fontFamily: 'Poppins-Light',
        color: 'white',
        textAlign: "center"
    },

    the5Texts: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: 'white',
        textAlign: 'left'
    },

    the5ButtonsStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'rgba(255, 255, 255, 0.17)',
        borderWidth: 1,
        borderRadius: 19,
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 20,
        marginBottom: 25
    },

    the5ArrowButtonsStyle: { 
        width: 15, 
        height: 15 
    }
});