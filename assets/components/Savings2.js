import { LinearGradient } from "expo-linear-gradient";
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { WIDTH, MYR } from "../constants";

export default function Savings2({navigation}){


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
    
})