import { LinearGradient } from "expo-linear-gradient";
import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { WIDTH, HEIGHT } from "../constants";
import MainBackground from "../components/main-background";
// import Slider from "@react-native-community/slider";
import { Slider } from "@miblanchard/react-native-slider";
import { MotiView } from "moti";

export default function Savings2({ route, navigation }){

    let name, amount, type;
    if (route.params){
        name = route.params.name ? route.params.name : ""
        amount= route.params.amount ? route.params.amount : 0
        type = route.params.type ? route.params.type : "gadget" 
    }
 
    const [months, setMonths] = useState(route.params? route.params.months? route.params.months : 0 : 0)
    const [pressed, setPressed] = useState(false)
    const [method, setMethod] = useState(route.params? route.params.method? route.params.method : "" : "")

    function renderSavings2(){
        return (
            <View style={{flex: 1}}>
                <SafeAreaView
                    style={{
                        flex: 1,
                        margin: 20
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
                            onPress={() => navigation.navigate("Savings1", {
                                name,
                                amount,
                                months,
                                method,
                                type
                            })}
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
                            flex: 0.8,
                            marginHorizontal: 15,
                            marginBottom: 20
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
                            flex: 3,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 16,
                                color: 'white',
                                textAlign: 'center'
                            }}>
                            Adjust the slider accordingly
                        </Text>
                        
                        <View
                            style={{
                                backgroundColor: 'rgba(229, 201, 247, 1)',
                                width: HEIGHT * 0.18,
                                height: HEIGHT * 0.18,
                                marginVertical: 45,
                                borderRadius: HEIGHT * 0.2,
                                alignItems: 'center'
                            }}
                        >

                            <View
                                style={{
                                    flex: 1.5,
                                    alignItems: "center",
                                    justifyContent: 'flex-end',
                                    paddingTop: 15
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: 'Poppins-ExtraBold',
                                        fontSize: 48,
                                        color: 'rgba(146, 69, 222, 1)',
                                        textShadowColor: 'rgba(0, 0, 0, 0.25)',
                                        textShadowOffset: {width: 0, height: 4},
                                        textShadowRadius: 4,
                                    }}
                                >
                                    {months > 0 ? months : ""}
                                </Text>
                            </View>
                            
                            <View
                                style={{
                                    flex: 1,
                                    borderTopWidth: 2,
                                    borderColor: 'rgba(62, 7, 56, 1)'
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Poppins-Medium",
                                        fontSize: 20,
                                        color: 'rgba(62, 7, 56, 1)',
                                    
                                    }}
                                >
                                    Months
                                </Text>
                            </View>

                            
                        </View>

                        <View
                            style={{
                                // borderWidth: 2
                            }}
                        >
                            <Slider
                                style={{height:200}}
                                minimumValue={0}
                                maximumValue={12}
                                minimumTrackTintColor="rgba(211, 182, 229, 1)"
                                maximumTrackTintColor="white"
                                thumbTintColor="rgba(173, 61, 241, 1)"
                                value={months}
                                onValueChange={setMonths}
                                step={1}
                                containerStyle={{width: WIDTH * 0.7}}
                                thumbStyle={{height: HEIGHT * 0.04, width: HEIGHT * 0.04, borderRadius: 40}}
                                trackStyle={{height: HEIGHT * 0.02, borderRadius: 20}}
                            />
                        </View>
                    </View>
        
                    <View
                        style={{
                            flex: 2.5,
                            marginVertical: 30
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 40,
                                marginVertical: 20
                            }}
                        >

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
                                Set an{'\ '}
                                <Text style={styles.highlightedTipText}>
                                    attainable goal{'\ '}
                                </Text>
                                with a{'\ '}
                                <Text style={styles.highlightedTipText}>
                                    reasonable timeline{'\ '}
                                </Text>
                                is the first step to hit your savings target
                            </Text>
                        </View>    

                        {
                            months > 0 &&
                            <TouchableOpacity
                                
                                style={{
                                    flex: 0.9,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 30,
                                    marginHorizontal: WIDTH * 0.2
                                }}
                                onPress={() => {
                                    setPressed(!pressed)
                                    setMethod
                                }}
                            >
                                <LinearGradient
                                    colors={['#ff739d', '#c375ff', '#7986ff']}
                                    locations={[.3, .67, 1]}
                                    start={{x:0, y:1}} end={{x:1, y:0}} 
                                    style={{
                                        flex: 1,
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
                                        Continue
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        }
                            
                    </View>

                </SafeAreaView>

                <View
                    style={{
                        position: 'absolute',
                        top: pressed ? 0 : HEIGHT,
                        zIndex: 9,
                        height: HEIGHT,
                        width: WIDTH,
                        backgroundColor: 'rgba(0,0,0,0.3)'
                    }}
                    onTouchEnd={() => {
                        setMethod("")
                        setPressed(false)
                    }}
                />

                <MotiView
                    style={{
                        position: 'absolute',
                        // top: HEIGHT,
                        zIndex: 10,
                        height: HEIGHT / 2,
                        width: WIDTH,
                        backgroundColor: 'rgba(0,0,0,1)',
                        borderRadius: 40,
                        padding: 40
                    }}
                    animate={{
                        translateY: pressed ? (HEIGHT / 2) + 20 : HEIGHT
                    }}
                >
                    <SafeAreaView
                        style={{
                            flex: 1
                        }}
                    >
                    
                        {(method == "" || method == "auto") && renderAutoSave()}

                        {(method == "" || method == "manual") && renderManualSave()}

                        {(method != "") && 

                            <TouchableOpacity
                                style={{
                                    flex: 0.8,
                                    marginVertical: 20,
                                    marginHorizontal: WIDTH * 0.2,
                                    // borderWidth: 1,
                                    // borderColor: 'white'
                                }}
                                onPress={() => {
                                    navigation.navigate('Savings4', {
                                        name,
                                        amount,
                                        months,
                                        method,
                                        type
                                    })
                                }}
                            >

                            <LinearGradient
                                colors={['#ff739d', '#c375ff', '#7986ff']}
                                locations={[.3, .67, 1]}
                                start={{x:0, y:1}} end={{x:1, y:0}} 
                                style={{
                                    flex: 0.7,
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
                                    Save
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        }

                    </SafeAreaView>
                </MotiView>
            </View>
        )
    }

    function renderAutoSave(){

        return (
            <TouchableOpacity
                style={styles.saveOptionBase}
                onPress={() => setMethod("auto")}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                        
                    }}
                >
                        
                    <Image 
                        source={require('../images/auto-save.png')}
                        style={{
                            left: -30,
                            position: 'absolute',
                            height: 25,
                            width: 25
                        }}    
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontFamily: 'Poppins-Bold',
                            fontSize: 16
                        }}    
                    >
                        Auto Save
                    </Text>

                    <Text
                        style={{
                            color: 'rgba(212, 240, 176, 0.95)',
                            fontFamily: 'Poppins-Bold',
                            fontSize: 16
                        }}   
                    >
                        Recommended
                    </Text>
                </View>

                <View
                    style={{
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontFamily: 'Poppins-Light',
                            fontSize: 14
                        }}
                    >
                        JeeMAT will automatically deduct from RHB assets and 
                        transfer them to JeeMAT safehouse.
                    </Text>
                </View>
            </TouchableOpacity>
        )
        
    }

    function renderManualSave(){
        return (
            <TouchableOpacity
                style={styles.saveOptionBase}
                onPress={() => setMethod("manual")}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress
                >
                    <Image 
                        source={require('../images/manual-save.png')}
                        style={{
                            left: -30,
                            position: 'absolute',
                            height: 25,
                            width: 25
                        }}    
                    />

                    <Text
                        style={{
                            color: 'white',
                            fontFamily: 'Poppins-Bold',
                            fontSize: 16
                        }}    
                    >
                        Manual Save
                    </Text>
                </View>

                <View
                    style={{
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontFamily: 'Poppins-Light',
                            fontSize: 14
                        }}
                    >
                        JeeMAT will periodically send reminder to you to 
                        make manual transfers to JeeMAT safehouse.
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <MainBackground content={renderSavings2} />
    )
}

const styles = StyleSheet.create({
    highlightedTipText: {
        color: 'rgba(173, 246, 161, 0.95)',
        fontFamily: 'Poppins-Bold'
    },
    saveOptionBase: {
        flex: 1,
        padding: 20
    },
    debugBorder: {
        borderColor: 'white',
        borderWidth: 1
    }
})


