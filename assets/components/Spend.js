import { FONTS, WIDTH, HEIGHT } from "../constants";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Navbar from "./Navbar";
import React, { useState } from "react";

export default function Spend(){

    const [data, setData] = useState({
        dailyIncome: 80,
        remainingMoney: 60,
    })

    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={["#503793",
                        "#546ada"]}
                // locations={[0, 1]}
                start={{x:0, y:0}}
                end={{x: 1, y:0}}
            >
                
                <Navbar title="JEEMAT" hidePeriods />

                <LinearGradient 
                    style={styles.content} 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} 
                    locations={[0, 1]}
                >
                    
                    <View style={styles.mainContent}>   

                        <View style={styles.innerWrapper}>

                            <Text
                                style={{
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 24,
                                    color: 'white',
                                    alignSelf: 'flex-start'
                                }}
                            >
                                I can spend...
                            </Text>

                            <Text
                                style={{
                                    fontFamily: 'Poppins-Bold',
                                    // letterSpacing: 
                                    fontSize: 48,
                                    textShadowOffset: {
                                        width: 2,
                                        height: 5
                                    },
                                    textShadowColor: "rgba(0, 0, 0, 0.25)",
                                    textShadowRadius: 5,
                                    color: 'rgba(219, 248, 236, 1)'
                                }}
                            >
                                {`RM${data.remainingMoney.toFixed(2)}`}
                            </Text>

                            <View
                                style={styles.percentageBar}
                            >
                                <View 
                                    style={{
                                        ...styles.filledBar,
                                        flex: data.remainingMoney / data.dailyIncome
                                    }}
                                />
                            </View>
                                        
                                    
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: WIDTH * 0.73,
                                    alignItems: 'stretch'
                                }}>
                                <Text
                                    style={{
                                        color: 'white',
                                        position: 'absolute',
                                        left: 0
                                    }}>
                                    RM0
                                </Text>

                                <Text
                                    style={{
                                        color: 'white',
                                        position: 'absolute',
                                        right: 0
                                    }}>
                                    RM80
                                </Text>
                            </View>
                            
                        </View>
                        

                    </View>
                
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 1
    },
    content: {
        flex: 15,
        alignItems: 'center',
    },
    mainContent: {
        // borderWidth: 1,
        // borderColor: 'black',
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    innerWrapper: {
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.17)',
        flex: 0.4,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderRadius: 20,
    },
    percentageBar: {
        width: WIDTH * 0.73,
        height: 50,
        backgroundColor: 'white',
        borderColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        marginBottom: 5
    },
    filledBar: {
        height: 50,
        backgroundColor: 'rgba(33, 161, 38, 1)',
        borderRadius: 20
    },
})