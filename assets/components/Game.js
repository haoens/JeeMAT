import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native"
import { WIDTH, HEIGHT } from "../constants"
import Background from "./Background"

export default function Game({navigation}){
    

    function GameContent(){
        return (
            <View style={styles.wrapper}>
                <View style={styles.topWrapper}>
                    <Image
                        source={require('../images/level.png')}
                        style={{
                            width: WIDTH * 1,
                            resizeMode: 'stretch',
                            flex: 1,
                            elevation: 30,
                        }}
                    />
                    {(1 >= 1) && <Image
                        source={require('../images/star.png')}
                        style={{
                            position: 'absolute',
                            height: 50,
                            width: 50,
                            left: WIDTH * 0.4,
                            bottom: HEIGHT * 0.15
                        }}
                    />}
                </View>
                
                <TouchableOpacity 
                    style={styles.playWrapper} 
                    onPress={() => navigation.navigate('Level')}
                >
                    <LinearGradient 
                        style={{
                            paddingVertical: 10,
                            paddingHorizontal: 20,
                            borderRadius: 15
                        }}
                        colors={['#7b1428', '#da1648']}
                        start={{x:0,y:0}}
                        end={{x:1, y:1}}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                color: 'white',
                                textAlign: 'center'
                            }}>
                            {`PLAY TO${'\n'}EARN STARS`}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            
        )
    }

    return (
        <Background child={GameContent}/> 
    )
}



const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        elevation: 30,
        marginTop: 10
    },
    topWrapper: {
        flex: 9
    },
    playWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        borderRadius: 18,
        marginTop: 10,
        marginBottom: 15,
        elevation: 40,
    }
})