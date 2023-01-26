import { LinearGradient } from "expo-linear-gradient";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { WIDTH, MYR } from "../constants";
import MainBackground from "../components/main-background";

export default function Savings2({navigation}){


    const [months, setMonths] = useState(0)


    function renderSavings2(){
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
                        flex: 0.8,
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
                        marginHorizontal: 15
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: 'Poppins-Bold',
                            color: 'white'
                        }}>
                        By when do you wish to achieve your goal?
                    </Text>
                </View>
    
                <View
                    style={{
                        flex: 3
                    }}
                >
    
                </View>
    
                <View
                    style={{
                        flex: 2
                    }}
                >
    
                </View>
            </SafeAreaView>
        )
    }

    return (
        <MainBackground content={renderSavings2} />
    )
}


