import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import React, { useState } from 'react'
import { HEIGHT, WIDTH } from '../constants'


export default function RevealCoins({route, navigation}){

    const coinsToAdd = route.params?.coinsToAdd? route.params.coinsToAdd : 0
    
    function renderRevealCoins(){ 
        return (
            <View style={styles.wrapper}>
    
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: 9,
                        left: 15
                    }}
                >
    
                    <Image 
                        source={require('../images/home.png')}
                        style={{
                            position: 'absolute',
                            zIndex: 2,
                            height: WIDTH * 0.1,
                            width: WIDTH * 0.1,
                        }}
                        onTouchEnd = {() => {
                            navigation.navigate('Tabs')
                        }}
                    />
    
                </TouchableOpacity>
    
    
                <View
                    style={{
                        marginBottom: 0.05 * HEIGHT
                    }}>
                    <Image 
                        source={require('../images/star.png')}
                        style={{
                            width: WIDTH * 0.5,
                            height: WIDTH * 0.5
                        }}
                    />
                </View>
                
    
                <View style={{
                    width: WIDTH * 0.45,
                    marginBottom: 0.05 * HEIGHT
                }}>
                    <Text
                        style={{
                            fontSize: 30,
                            fontFamily: 'Poppins-Medium',
                            textAlign: 'center',
                            lineHeight: 38,
                            fontWeight: '600'
                        }}>
                        YOU HAVE
                        <Text
                            style={{
                                color:"rgba(255, 28, 28, 1)",
                            }}
                        >
                            {` ${coinsToAdd ? coinsToAdd : 0} `}
                        </Text>
                        COINS
                    </Text>
                </View>
    
                <View
                    style={{
                        backgroundColor: 'white',
                        paddingHorizontal: 40,
                        paddingVertical: 25,
                        borderRadius: 35,
                        elevation: 4
                    }}>
                        
                    <View style={{
                        position: 'absolute',
                        top: -20,
                        left: -10,
                        backgroundColor: '#e9dbb4',
                        borderRadius: 30,
                        padding: 8,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            source={require('../images/Game.png')}
                            style={{
                                height: 35,
                                width: 35,
                                resizeMode: 'contain'
                            }}
                        >
                        </Image>
                    </View>


                    <Text
                        style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: 18,
                            textAlign: 'center',
                            lineHeight: 22
                        }}
                    >
                        Play more to earn and exchange for rewards
                    </Text>
                </View>
                
            </View>
        )
    }


    return (
        <Background child={renderRevealCoins}/>
    )
}



const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    }
})