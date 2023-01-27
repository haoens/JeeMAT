import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity } from "react-native"
import { HEIGHT, WIDTH } from "../constants"
import Background from "../components/Background"
import React, {useState, useEffect} from "react"
import RevealCoins from "./RevealCoins"

export default function Level({navigation}){

    const questionAnswer = {
        question: "What does APR stands for",
        choices: [
            "Annual Penalty Rate",
            "Annual Percentage Rate",
            "Applied Percentage Rate"
        ],
        answer: 2,
        tip: `The Annual Percentage Rate (APR) is the cost you pay each year to borrow money, including fees, expressed as a percentage.`
    }

    const numberMap = {
        0: 'A',
        1: 'B',
        2: 'C'
    }

    const [answered, setAnswered] = useState(false);
    const [correct, setCorrect] = useState(false);

    // useEffect(() => {
    //     setAnswered(false)
    // }, [answered])

    function renderLevel(){
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
                            setAnswered(false)
                        }}
                    />

                </TouchableOpacity>
                
                {
                    answered &&
                        <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => navigation.navigate("RevealCoins", {
                            coinsToAdd: correct ? 15 : 0
                        })}
                    >
                        <Text
                            style={{
                                fontFamily: 'Poppins-Medium',
                                fontSize: 12
                            }}
                        >
                            VIEW YOUR COINS
                        </Text>

                        <Image
                            source={require('../images/star.png')}
                            style={{
                                height: 30,
                                width: 30
                            }}
                        />

                    </TouchableOpacity> 
                }      

                <Image 
                    source={require('../images/star.png')}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        height: WIDTH * 0.3,
                        width: WIDTH * 0.3,
                        top: HEIGHT * 0.05
                    }}
                />
                <View style={styles.TriangleShapeCSS}/>
                <View style= {{flex: 1}} />
                <View style={styles.contentWrapper}>
                    <View style={styles.topWrapper}>
                        <View style={styles.questionWrapper}>
                            <ImageBackground 
                                source={require('../images/text-box.png')}
                                imageStyle={{
                                    resizeMode: 'stretch'
                                }}
                                style={{
                                    height: HEIGHT * 0.23,
                                    width: WIDTH * 0.9,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: 30,
                                    backgroundColor: 'white',
                                    borderRadius: WIDTH * 0.1
                                }} >
                                <Text style={{
                                    fontSize: 20,
                                    fontFamily: 'Poppins-Bold',
                                    textAlign: 'center',
                                }}>
                                    {questionAnswer.question.toUpperCase()}
                                </Text>
                            </ImageBackground> 
                        </View>
                        
                        <View style={styles.answerWrapper}>
                            {questionAnswer.choices.map((choice, index) => {
                                return (
                                    <TouchableOpacity 
                                        key={index}
                                        style={{
                                            width: WIDTH * 0.8,
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: 'space-around',
                                            backgroundColor: 'white',
                                            borderRadius: 40,
                                            borderWidth: 2,
                                            borderColor: '#a88459',
                                            elevation: 2,
                                            paddingRight: 10,
                                            backgroundColor: !answered ? 'white' :
                                                                index === questionAnswer.answer ?
                                                                'rgba(170, 253, 150, 0.89)' :
                                                                'rgba(253, 150, 150, 0.89)'
                                        }}
                                        onPress={() => {
                                            if (index === questionAnswer.answer) setCorrect(true)
                                            setAnswered(true)
                                        }}
                                    >   

                                        <View
                                            style={{
                                                backgroundColor: !answered ? '#fa9805' :
                                                                'black',
                                                flex: 1,
                                                height: 55,
                                                borderRadius: 55,
                                                marginRight: 0,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                paddingHorizontal: 5
                                            }} 
                                        >
                                            {!answered &&
                                                <Text
                                                style={{
                                                    fontFamily: 'Poppins-Medium',
                                                    fontSize: 18,
                                                }}
                                            >
                                                {numberMap[index]}
                                            </Text>
                                            }

                                            {answered &&
                                                <Image 
                                                    source={(index === questionAnswer.answer ? 
                                                            require('../images/correct.png') :
                                                            require('../images/wrong.png'))}
                                                    style={{
                                                        height: 40,
                                                        width: 40,
                                                        resizeMode: 'stretch'
                                                    }}
                                                />
                                            }
                                        </View>
                                        <View
                                            style={{
                                                flex: 4,
                                            }}>
                                            <Text
                                                style={{
                                                    fontFamily: 'Poppins-Medium',
                                                    fontSize: 18,
                                                    lineHeight: 20,
                                                    textAlign: 'center'
                                                }}
                                            >
                                                {choice}
                                            </Text>
                                        </View>     
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    </View>
                    
                    <View style={styles.bottomWrapper}>
                        {answered && 
                        (
                            <View style={{
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderRadius: 30,
                                elevation: 3,
                                paddingVertical: 5,
                            }}>
                                <View style={{
                                    position: 'absolute',
                                    top: -20,
                                    left: 0,
                                    backgroundColor: '#e9dbb4',
                                    borderRadius: 30,
                                    padding: 2
                                }}>
                                    <Image
                                        source={require('../images/bulb.png')}
                                        style={{
                                            height: 50,
                                            width: 50,
                                            resizeMode: 'contain'
                                        }}
                                    >
                                    </Image>
                                </View>

                                <Text style={{
                                    fontFamily: 'Poppins-ExtraBold',
                                    fontSize: 20,
                                    color: '#226C2E',
                                    textAlign: 'center'
                                }}>
                                    DID YOU KNOW?
                                </Text>
                                    
                                <Text style={{
                                    fontFamily: 'Poppins-Medium',
                                    fontSize: 12,
                                    textAlign: 'center'

                                }}>
                                    {questionAnswer.tip}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </View>
            
        )
    }

    return (
        <Background child={renderLevel}/> 
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TriangleShapeCSS: {
        position: 'absolute',
        width: 0,
        height: 0,
        top: HEIGHT * 0.12,
        borderLeftWidth: WIDTH * 0.65,
        borderRightWidth: WIDTH * 0.65,
        borderBottomWidth: WIDTH * 0.95,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgba(255,255,255,0.5)',
    },
    contentWrapper: {
        flex: 4,
        // borderColor: 'black',
        // borderWidth: 1,
        marginVertical: 20
    },
    topWrapper: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 10
        // borderWidth: 1,
        // borderColor: 'black'
    },
    questionWrapper: {
        flex: 1,
    },
    answerWrapper: {
        flex: 1.5,
        // borderWidth:1,
        // borderColor: 'black',
        marginTop: HEIGHT * 0.05,
        justifyContent: 'space-around'
    }
})