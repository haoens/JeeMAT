import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import MainBackground from "../components/main-background";
import { WIDTH } from "../constants";
import { LinearGradient } from "expo-linear-gradient";

export default function Savings5({ navigation }){

    function renderSavings5(){
        return (
            <SafeAreaView 
                style={{
                    flex: 1,
                    marginHorizontal: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >   
            
                <View>
                    <Image source={require('../images/confirmation.png')}/>
                </View>

                <Text
                    style={{
                        fontSize: 40,
                        fontFamily: 'Poppins-Bold',
                        textAlign: 'center',
                        color: 'white',
                        marginVertical: 35
                    }}
                >
                    Your saving goal has been created!
                </Text>

                <TouchableOpacity
                    style={{
                        marginHorizontal: WIDTH * 0.2,
                        marginTop: 20,
                        height: 90,
                        width: 190
                    }}
                    onPress={() => {
                        navigation.navigate('Savings')
                    }}
                >

                    <LinearGradient
                        colors={['#ff739d', '#c375ff', '#7986ff']}
                        locations={[.3, .67, 1]}
                        start={{x:0, y:1}} end={{x:1, y:0}} 
                        style={{
                            flexGrow: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 18
                        }} 
                        
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize:  16
                            }}>
                            View Saving Goal
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
    
    return (
        <MainBackground content={renderSavings5} />
    )
}

const styles = StyleSheet.create({

})


