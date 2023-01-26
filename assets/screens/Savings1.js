import { LinearGradient } from "expo-linear-gradient";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { WIDTH, MYR } from "../constants";

export default function Savings1({navigation}){

    const [name, setName] = useState("");
    const [amount, setAmount] = useState(1000);


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

            <LinearGradient 
                style={styles.background}
                colors={["rgba(146, 69, 222, 1)",
                        "rgba(95, 126, 255, 1)"]}
                // locations={[0, 1]}
                start={{x:0, y:0}}
                end={{x: 1, y:0}}
            >   


                <LinearGradient 
                    style={styles.content} 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} 
                    locations={[0, 1]}
                >
                    <SafeAreaView
                        style={{
                            flex: 1,
                        }}
                    >

                        <View
                            style={{
                                flex: 0.8,
                                marginHorizontal: 25
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
                                    style={{
                                        transform: [{scaleX: -1}],
                                        height: 20,
                                        resizeMode: 'contain'
                                    }}
                                >
                                </Image>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                // justifyContent: 'space-around',
                                marginHorizontal: 15,
                            }}
                        >
                            <View
                                style={[styles.baseTermWrapper, {marginRight: 15}]}>
                                    <LinearGradient 
                                        colors={['#ff739d', '#c375ff', '#7986ff']}
                                        locations={[.3, .67, 1]}
                                        start={{x:0, y:1}} end={{x:1, y:0}} 
                                        style={styles.baseTermButton} 
                                        onTouchEnd={() => {}}
                                    >
                                        <View
                                            style={styles.termContent}
                                        >
                                            <View
                                                style={styles.termDuration}
                                            >
                                                <Text
                                                    style={{
                                                        fontFamily: "Poppins-Medium",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    Long Term
                                                </Text>

                                                <Text
                                                    style={{
                                                        fontFamily: "Poppins-Medium",
                                                        fontSize: 12,
                                                    }}
                                                >
                                                    More than 1 year
                                                </Text>
                                            </View>

                                            <Image 
                                                source={require('../images/calendar.png')}
                                                style={{
                                                    resizeMode: 'contain',
                                                    width: 30
                                                }}
                                            />
                                        </View>
                                    </LinearGradient>
                            </View>
                            
                                
                            <View
                                style={styles.baseTermWrapper}
                            >
                                    <LinearGradient 
                                        colors={['#ff739d', '#c375ff', '#7986ff']}
                                        locations={[.3, .67, 1]}
                                        start={{x:0, y:1}} end={{x:1, y:0}} 
                                        style={styles.baseTermButton} 
                                        onTouchEnd={() => {}}
                                    >
                                        <View
                                            style={styles.termContent}
                                        >
                                            <View
                                                style={styles.termDuration}
                                            >
                                                <Text
                                                    style={{
                                                        fontFamily: "Poppins-Medium",
                                                        fontSize: 16,
                                                    }}
                                                >
                                                    Short Term
                                                </Text>

                                                <Text
                                                    style={{
                                                        fontFamily: "Poppins-Medium",
                                                        fontSize: 12,
                                                    }}
                                                >
                                                    Less than 1 year
                                                </Text>
                                            </View>

                                            <Image 
                                                source={require('../images/present.png')}
                                                style={{
                                                    resizeMode: 'contain',
                                                    width: 30
                                                }}
                                            />
                                        </View>
                                    </LinearGradient>
                            </View>
                                
                        </View>

                        <View
                            style={{
                                flex: 8,
                                paddingHorizontal: 30
                            }}
                        >
                            <View
                                style={{
                                    marginTop: 30,
                                    flex: 1
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        marginBottom: 14,
                                        fontFamily: "Poppins-Bold",
                                        fontSize: 18
                                    }}
                                >
                                    What do you want?
                                </Text>

                                <TextInput
                                    style={{
                                        borderColor: 'rgba(255, 255, 255, 0.17)',
                                        borderWidth: 1,
                                        paddingVertical: 5,
                                        paddingHorizontal: 12,
                                        color: 'white',
                                        fontFamily: 'Poppins-Medium',
                                        fontSize: 24,
                                    }}
                                    placeholder="Eg: Macbook Pro"
                                    placeholderTextColor='white'
                                    value={name}
                                    onChangeText={setName}
                                >
                                    
                                </TextInput>
                            </View>
                                    
                            <View
                                style={{
                                    marginTop: 36,
                                    flex: 2.5
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        marginBottom: 14,
                                        fontFamily: "Poppins-Bold",
                                        fontSize: 18
                                    }}
                                >
                                    How much do you want to save?
                                </Text>

                                <View
                                    style={{
                                        borderColor: 'rgba(255, 255, 255, 0.17)',
                                        borderWidth: 1,
                                        borderRadius: 20,
                                        padding: 15,
                                        flex: 1,
                                        flexDirection: 'column'
                                    }}
                                >

                                    <View
                                        style={{
                                            alignItems: 'flex-start',
                                            flex: 1,
                                        }}
                                    >
                                        <Text
                                            style={styles.saveAmountText}
                                        >
                                            RM
                                        </Text>
                                    </View>
                                    

                                    <View
                                        style={{
                                            justifyContent: 'flex-start',
                                            alignItems: 'center',
                                            flex: 2
                                        }}
                                    >
                                        <TextInput
                                            style={styles.saveAmountText}
                                            value={amount}
                                            keyboardType='numeric'
                                            placeholder="1000.00"
                                            placeholderTextColor='rgba(219, 248, 236, 1)'
                                            onChangeText={(value) => setAmount(parseFloat(parseFloat(value).toFixed(2)))}
                                            textAlign='center'
                                        >
                                        </TextInput>
                                    </View>
                                    
                                    
                                
                                </View>
                            </View>
                            
                            <View
                                style={{
                                    flex: 2,
                                    paddingHorizontal: 20,
                                    marginTop: 20
                                }}>

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <View
                                            style={{
                                                position: 'absolute',
                                                height: 25,
                                                width: 25,
                                                left: -40
                                            }}
                                        >
                                            <Image 
                                                source={require('../images/tip.png')}
                                                style={{
                                                    resizeMode: 'contain',
                                                    flex: 1
                                                }}
                                            />
                                        </View>

                                        <Text
                                            style={{
                                                fontSize: 16,
                                                color: 'white',
                                                fontFamily: 'Poppins-Bold',
                                                lineHeight: 25
                                            }}>
                                            Saving Tip
                                        </Text>
                                    </View>
                                    

                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: 'white',
                                            fontFamily: 'Poppins-Light',
                                            lineHeight: 25
                                            
                                        }}
                                    >
                                        To save{'\ '}
                                        <Text style={styles.highlightedTipText}>
                                            RM {amount.toFixed(2)} in 6 months,{'\ '}
                                        </Text>
                                         you need to save{'\ '}
                                         <Text style={styles.highlightedTipText}>
                                            RM {(amount / 26).toFixed(2)} per week.{'\ '}
                                        </Text>
                                         This is equivalent to{'\ '}
                                         <Text style={styles.highlightedTipText}>
                                            skipping 4 Starbucks per week{'\ '}
                                        </Text>
                                    </Text>
                            </View>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('Savings2')}
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                }}>
                                    <LinearGradient 
                                        colors={['#ff739d', '#c375ff', '#7986ff']}
                                        locations={[.3, .67, 1]}
                                        start={{x:0, y:1}} end={{x:1, y:0}} 
                                        style={{
                                            flex: 0.6,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 18
                                        }} 
                                        onTouchEnd={() => {}}
                                    >
                                        <Text
                                            style={{
                                                fontFamily: 'Poppins-Medium',
                                                fontSize:  16
                                            }}>
                                            Continue
                                        </Text>
                                    </LinearGradient>
                            </TouchableOpacity>
                            
                        </View>

                    </SafeAreaView>
                </LinearGradient>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    content: {
        flex: 1
    },
    baseTermWrapper: {
        flex: 1,
        shadowColor: 'rgba(0,0,0,1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4,
    },
    baseTermButton: {
        flex: 1,
        borderRadius: 18,
        justifyContent: 'center',
        borderColor: 'rgba(255, 255, 255, 0.17)',
        borderWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    termContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    termDuration: {
        flex: 1
    },
    saveAmountText: {
        fontFamily: "Poppins-ExtraBold",
        fontSize: 36,
        color: 'rgba(219, 248, 236, 1)',
    },
    highlightedTipText: {
        color: 'rgba(173, 246, 161, 0.95)',
        fontFamily: 'Poppins-Bold'
    }
})