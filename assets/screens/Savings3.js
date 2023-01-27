import { SafeAreaView, View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
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
                        onPress={() => navigation.navigate("Savings1")}
                    >
                        <Image
                            source={require('../images/arrow.png')}
                            style={{
                                transform: [{ scaleX: -1 }],
                                height: 20,
                                resizeMode: 'contain'
                            }}
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


                <View
                    style={{
                        flex: 1
                    }}
                >
                    <TouchableOpacity>
                        <View>
                            <Text
                                style={[styles.the5text]}>
                                General Savings</Text>
                            <Image
                                source={require('../images/arrow.png')}
                            //  style={styles.ImageIconStyle}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text
                                style={[styles.the5text]}>
                                Motor Vehicles</Text>
                            <Image
                                source={require('../images/arrow.png')}
                            //  style={styles.ImageIconStyle}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text
                                style={[styles.the5text]}>
                                House</Text>
                            <Image
                                source={require('../images/arrow.png')}
                            //  style={styles.ImageIconStyle}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text
                                style={[styles.the5text]}>
                                Marriage</Text>
                            <Image
                                source={require('../images/arrow.png')}
                            //  style={styles.ImageIconStyle}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View>
                            <Text
                                style={[styles.the5text]}>
                                Gadgets</Text>
                            <Image
                                source={require('../images/arrow.png')}
                            //  style={styles.ImageIconStyle}
                            />
                        </View>
                    </TouchableOpacity>

                </View>

                {/* <button style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px'
                }}>
                    <Text>General Savings</Text>
                </button> */}
            </SafeAreaView>
        )
    }
    return (
        // The background image
        <MainBackground content={renderSavings3} />
    )
}

const styles = StyleSheet.create({
    theQuestion: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: 'white',
        textAlign: "center"
    },
    the5text: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: 'white'
    }
});