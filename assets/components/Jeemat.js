import { Image, StyleSheet, Text, View } from "react-native"
import { FONTS, HEIGHT, WIDTH } from "../constants"
import Navbar from "./Navbar"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"

export default function Jeemat(){
    
    const [ message, setMessage ] = useState(`How Much Can ${"\n"}I Spend Today?`)

    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={["#503793", "#546ada"]}
                // locations={[0, 1]}
                start={{x:0, y:0}}
                end={{x: 1, y:0}}>
                <Navbar title="JEEMAT" position={2} />
                <LinearGradient style={styles.content} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} locations={[0, 0.7]}>
                    <View style={styles.topWrapper}>
                        <Text
                            style={{
                                fontFamily:"Poppins-Light",
                                color: "white",
                                fontSize: 22,
                                marginBottom: 10
                            }}>
                            Tap to Jeemat
                        </Text>
                        <View style={styles.circleWrapper}>
                            <View style={{
                                width: WIDTH * 0.6,
                                height: WIDTH * 0.6,
                                backgroundColor: 'white',
                                borderRadius: WIDTH * 0.3,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderBottomColor: 'rgba(0,0,0,1)',
                                borderBottomWidth: 2
                            }}
                                elevation={20}>
                                <View style={{
                                    width: WIDTH * 0.5,
                                    height: WIDTH * 0.5,
                                    backgroundColor: '#d3d3f0',
                                    borderRadius: WIDTH * 0.25,
                                    alignItems: 'center',
                                justifyContent: 'center'
                                }}>
                                    <View style={{
                                        width: WIDTH * 0.37,
                                        height: WIDTH * 0.37,
                                        backgroundColor: '#c08bd9',
                                        borderRadius: WIDTH * 0.2,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{
                                            width: WIDTH * 0.3,
                                            height: WIDTH * 0.3,
                                            backgroundColor: '#a259b5',
                                            borderRadius: WIDTH * 0.15,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <Image 
                                                source={require('../images/Logo.png')}
                                                style={{
                                                    width: WIDTH * 0.15,
                                                    height: WIDTH * 0.15
                                                }} 
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.bottomWrapper}>
                        <Text style={{...FONTS.header, fontSize: 26}}>
                            {message}
                        </Text>
                    </View>
                </LinearGradient>
            </LinearGradient>
            
        </View> 
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    background: {
        flex: 1
    },
    content: {
        flex: 9,
        // borderWidth: 2,
        // borderColor: 'white'
    },
    topWrapper: {
        flex:1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    circleWrapper: {
        // borderColor: 'white',
        // borderWidth: 2,
        flex:1
    },
    bottomWrapper: {
        flex:1,
        alignItems: "center",
        justifyContent: "flex-start",
        // borderWidth: 2,
        // borderColor: 'white',
        marginTop: 20
    },
})