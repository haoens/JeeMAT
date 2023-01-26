import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from "react-native"
import { FONTS, HEIGHT, WIDTH } from "../constants"
import Navbar from "../components/Navbar"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { Calendar } from "react-native-calendars"
import { Colors } from "react-native/Libraries/NewAppScreen"
import 'intl';
import 'intl/locale-data/jsonp/ms'

export default function Account({navigation}){

    const [asset, setAsset] = useState(10900.67);
    const amountSaved = 9000;
    const goalAmount = 90000;
    const totalIncome = 8378.88;
    const moneySpent = 60.50;

    const MYR = new Intl.NumberFormat('ms-MY', {
        style: 'currency',
        currency: 'MYR',
    });
    
    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={["#503793",
                        "#546ada"]}
                // locations={[0, 1]}
                start={{x:1, y:0}}
                end={{x: 0, y:0}}
            >
                <Navbar title="ACCOUNT" position={3} />

                <LinearGradient 
                    style={styles.content} 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} 
                    locations={[0, 0.7]}
                >
                    <SafeAreaView style={styles.accountsContent}>
                    <View style={styles.topWrapper}>
                        <View style={styles.profilePictureWrapper}>
                            <View style={styles.profilePicture}>
                                <Image 
                                    source={require('../images/user.png')}
                                    style={{
                                        flex: 0.7,
                                        resizeMode: 'contain'
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    
                    <LinearGradient style={styles.bottomWrapper} colors={["rgba(0,0,0,0.25)", "black"]}>
                        

                        <View style={styles.asset}>
                                <Text style={styles.accountsContentH1}>TOTAL ASSET</Text>
                                <Text
                                    style={{
                                        color: '#ADF6A1',
                                        fontFamily: 'Poppins-ExtraBold',
                                        fontSize: 22,
                                        marginTop: 5
                                    }}>
                                    {MYR.format(asset)}
                                </Text>
                        </View>

                        <TouchableOpacity 
                            style={styles.savingsGoal} 
                            activeOpacity={0.5}
                            onPress={() => navigation.navigate('Savings')}
                        >

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1,
                                    marginBottom: 5,
                                }}
                            >

                                <Text style={styles.accountsContentH1}>JeeMAT SafeHouse</Text>
                                
                            </View>
                                
                            {renderArrow()}

                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: WIDTH * 0.4,
                                    backgroundColor: 'white',
                                    flex: 1.5,
                                    marginBottom: 5,
                                    borderRadius: 20,
                                    overflow: 'hidden'
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: '#21A126',
                                        flex: amountSaved / goalAmount,
                                        borderRadius: 20,
                                    }}>
                                    
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: WIDTH * 0.5
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'rgba(173, 246, 161, 0.95)',
                                        fontFamily: 'Poppins-Medium',
                                        fontSize: 12
                                    }}
                                >
                                    {MYR.format(amountSaved)}
                                </Text>

                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Medium',
                                        fontSize: 12
                                    }}
                                >
                                    {MYR.format(goalAmount)}
                                </Text>
                            </View>
                            
                        </TouchableOpacity>

                        <View style={styles.incomeExpenses}>

                            <TouchableOpacity style={styles.income} activeOpacity={0.5}>

                                <Text 
                                    style={{
                                        ...styles.accountsContentH1,
                                        alignSelf: 'flex-start',
                                        marginBottom: 30
                                    }}
                                >
                                    INCOME
                                </Text>

                                {renderArrow()}

                                <View style={{marginBottom: 24}}>
                                    <Text
                                        style={{
                                            fontFamily: 'Poppins-Medium',
                                            color: 'white',
                                            fontSize: 14
                                        }}
                                    >
                                        TOTAL INCOME :
                                    </Text>

                                    <Text
                                        style={{
                                            fontFamily:"Poppins-Bold",
                                            color: 'rgba(173, 246, 161, 0.95)',
                                            fontSize: 22,
                                            textAlign: 'center'
                                        }}
                                    >
                                        {MYR.format(totalIncome)}
                                    </Text>

                                    
                                </View>

                                <Text
                                    style={{
                                        fontSize: 10,
                                        color: 'rgba(215, 254, 223, 0.47)'
                                    }}
                                >
                                        UP BY 2% COMPARED TO LAST MONTH
                                </Text>
                                
                            </TouchableOpacity>

                            <View style={styles.expenses}>
                                <Text 
                                    style={{
                                        ...styles.accountsContentH1,
                                        alignSelf: 'flex-start',
                                        marginBottom: 10
                                    }}
                                >
                                    EXPENSES
                                </Text>

                                {renderArrow()}

                                <Calendar 
                                    hideArrows
                                    disableMonthChange
                                    style={{
                                        borderRadius: 10,
                                        marginBottom: 10
                                    }}
                                    theme={{
                                        textDayFontSize:7,
                                        textMonthFontSize:12,
                                        textDayHeaderFontSize:6,
                                        dayTextColor: 'white',
                                        monthTextColor: 'white',
                                        backgroundColor: "rgba(100, 100, 100, 0)",
                                        calendarBackground: "rgba(100, 100, 100, 0)",
                                        borderColor: "rgba(255,255,255,1)",
                                        borderWidth:1,
                                        weekVerticalMargin: 1,
                                        paddingHorizontal:0,
                                        todayBackgroundColor: '#c9a1d7',
                                        todayTextColor: 'white',
                                        textDisabledColor: 'gray',
                                        'stylesheet.calendar.header': {
                                            header: {
                                                marginTop: 0,
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                            },
                                            monthText: {
                                                fontSize:12,
                                                color: 'white',
                                                margin: 2,

                                            },
                                            week: {
                                                marginTop: 0,
                                                flexDirection: 'row',
                                                justifyContent: 'space-around'
                                            },
                                            },
                                        'stylesheet.day.basic': {
                                            base: {
                                                width: 20,
                                                height: 20,
                                                alignItems: 'center',
                                                borderColor: 'rgba(255,255,255,0.3)',
                                                borderWidth: 0.5
                                            },
                                            today: {
                                                backgroundColor: '#c9a1d7',
                                                borderRadius: 2
                                            },
                
                                        }}
                                    }
                                    // dayComponent={({date, state, marking}) => {
                                    //     return (
                                    //         <View>
                                    //             <Text style={{textAlign: 'center', 
                                    //             color: state === 'disabled' ? 'gray' : date.day === new Date().getDate() ? '#c9a1d7':'white',
                                    //             fontSize:8,
                                    //             marginVertical:3}}>{date.day}</Text>
                                    //         </View>
                                    //     )
                                    // }} 
                                />
                                
                                <View>
                                    <Text
                                        style={{
                                            fontFamily: 'Poppins-Medium',
                                            color: 'white',
                                            fontSize: 12,
                                            textAlign: 'center'
                                        }}
                                    >
                                        MONEY SPENT(TODAY) : 
                                    </Text>

                                    <Text
                                        style={{
                                            fontFamily: 'Poppins-ExtraBold',
                                            color: 'rgba(255, 147, 189, 0.95)',
                                            fontSize: 20,
                                            textAlign: 'center'
                                        }}>
                                        {MYR.format(moneySpent)}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                </SafeAreaView>
                </LinearGradient>
            </LinearGradient>
            
        </View> 
    )
}

function renderArrow(){
    return (
        <Image 
            source={require('../images/arrow.png')}
            style={{
                resizeMode: 'contain',
                height: 15,
                position: 'absolute',
                top: 10,
                right: 10
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    background: {
        flex:1
    },
    content: {
        flex:15
    },
    topWrapper: {
        flex: 2,
        zIndex: 2
    },
    bottomWrapper: {
        flex: 9,
        // backgroundColor: "rgba(0,0,0,0.4)",
        borderTopLeftRadius: WIDTH * 0.05,
        borderTopRightRadius: WIDTH * 0.05,
        width: WIDTH,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingTop: WIDTH * 0.1,
    },
    accountsBackground:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: 'center',
        // paddingVertical: 20,
        // paddingHorizontal: 10,
        zIndex: 0
    },
    accountsContent: {
        flex: 1
    },
    accountsContentH1: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: 15, 
    },
    profilePictureWrapper: {
        flex: 1.2,
        marginTop: 15,
        alignItems: "center",
        zIndex: 3
    },
    profilePicture:{
        backgroundColor: 'white',
        width: WIDTH * 0.35,
        height: WIDTH * 0.35,
        borderRadius: WIDTH * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // bottomWrapper:{
    //     flex: 3.5,
    //     backgroundColor: 'rgba(0,0,0, .1)',
    //     width: WIDTH,
    //     align
    // },
    asset: {
        flex: 0.8,
        borderColor: 'rgba(255, 255, 255, 0.17)',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: WIDTH * 0.08,
        marginVertical: 10,
        alignItems: "center",
        width: WIDTH * 0.8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    savingsGoal: {
        flex: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: WIDTH * 0.05,
        marginVertical: 10,
        alignItems: "center",
        width: WIDTH * 0.8,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    incomeExpenses: {
        flex: 2.5,
        flexDirection: 'row',
        // borderColor: 'black',
        // borderWidth: 1,
        marginVertical: 10,
        paddingVertical: 20,
    },
    income: {
        flex:1,
        borderColor: 'rgba(202, 205, 213, .2)',
        borderWidth: 1,
        backgroundColor: 'rgba(100, 100, 100, 0.15)',
        borderRadius: WIDTH * 0.08,
        marginLeft: 10,
        marginRight: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center",
    },
    expenses: {
        flex: 1,
        borderColor: 'rgba(202, 205, 213, .2)',
        borderWidth: 1,
        backgroundColor: 'rgba(100, 100, 100, 0.15)',
        // backgroundColor: 'rgba(202, 205, 213, 0.1)',
        borderRadius: WIDTH * 0.08,
        marginLeft: 5,
        marginRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: "center"
    }
})
