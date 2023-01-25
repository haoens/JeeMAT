import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FONTS, HEIGHT, WIDTH } from "../constants"
import Navbar from "./Navbar"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState, useEffect } from "react"
import { MotiView } from "moti"
import { Easing } from "react-native-reanimated"
import { AnimatePresence } from "moti"
import { DataStore } from '@aws-amplify/datastore';

export default function Jeemat({ navigation }){
    
    const [ message, setMessage ] = useState(`How Much Can ${"\n"}I Spend Today?`)
    const [ pressed, setPressed ] = useState(false)
    const [ animation, setAnimation ] = useState(false)




    const delayCalculation = (n, delay) => {setTimeout(() => {
        setMessage(`Calculating${".".repeat(n)}`)
    }, delay * 1)}



    const showResult = () => {
        setTimeout(() => {
            setMessage(`How Much Can ${"\n"}I Spend Today?`)
            setPressed(false)
            navigation.navigate('Spend');
        }, 3000)
    }

    // console.log(pressed);

    const offAnimation = () => {
        setTimeout(() => {
            setAnimation(false)
        }, 1500)
    }

    const process = () => {
        setPressed(true);
        setAnimation(true);
        delayCalculation(1, 0);
        delayCalculation(2, 1000);
        offAnimation();
        delayCalculation(3, 2000);
        showResult();
        // originalMessage();
    }


    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={["#503793",
                        "#546ada"]}
                locations={[0, 1]}
                start={{x:0, y:0}}
                end={{x: 1, y:0}}
            >
                <Navbar title="JEEMAT" position={2} />

                <LinearGradient 
                    style={styles.content} 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} 
                    locations={[0, 0.7]}>

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
                        <TouchableOpacity 
                            activeOpacity={0.8} 
                            style={styles.circleWrapper}
                            onPress={() => {if(!pressed) process()}}
                        >
                                        
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
                                        height: WIDTH * 0.15,
                                        zIndex: 3
                                    }} 
                                />
                                <AnimatePresence>
                                    {animation && [...Array(3).keys()].map((index) => {
                                    return (
                                        <MotiView
                                            from={{opacity: 1, scale: 1}}
                                            animate={{opacity:0, scale: 4}}
                                            transition={{
                                                type: 'timing',
                                                duration: 2000,
                                                easing: Easing.out(Easing.ease),
                                                delay: index * 300,
                                                loop: true,
                                            }}
                                            exit={{
                                                scale: 0,
                                                opacity: 1
                                            }}
                                            key={index}
                                            style={{position:'absolute', ...styles.dot}}
                                        />
                                    )})}
                                </AnimatePresence>
                                
                            </View>
                                
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottomWrapper}>
                        <Text style={{...FONTS.header, fontSize: 26}}>
                            {message}
                        </Text>
                    </View>

                </LinearGradient>
            </LinearGradient>
            <TouchableOpacity style={styles.game} onPress={() => navigation.navigate('Game')}>
                {/* Replace with Motiview to shake */}
                <View 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    from={{
                        rotate: "-10deg",
                    }}
                    animate={{
                        rotate: "10deg"
                    }}
                    transition={{
                        loop: true,
                        type: "timing",
                        duration: 500,
                    }}
                >
                    <Image source={require('../images/Game.png')} 
                        style={{
                            height: WIDTH / 5, 
                            width: WIDTH / 5,
                            position: "absolute",
                            zIndex: 2,
                            bottom: 15
                        }}
                    />
                    <View style={{
                            backgroundColor: 'white',
                            width: WIDTH / 10,
                            zIndex: 3,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 15
                        }}>
                        <Text style=
                        {{fontFamily:'Poppins-ExtraBold', fontSize: 8}}>Play Now</Text>
                    </View>
                </View>
                
            </TouchableOpacity>
        </View> 
    )   
}

/* <View style={{
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
                                    }}> */

                                        {/* </View>
                                </View>
                            </View> */}

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
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    },
    bottomWrapper: {
        flex:1,
        alignItems: "center",
        justifyContent: "flex-start",
        // borderWidth: 2,
        // borderColor: 'white',
        marginTop: 20
    },
    dot: {
        width: WIDTH * 0.2,
        height: WIDTH * 0.2,
        borderRadius: WIDTH * 0.15,
        backgroundColor: '#a259b5',
    },
    game: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})