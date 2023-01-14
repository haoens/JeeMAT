import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { FONTS, HEIGHT, WIDTH } from "../constants"
import Navbar from "./Navbar"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import { Calendar } from "react-native-calendars"

export default function Account(){
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
                    <View style={styles.accountsContent}>
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

                        <View style={styles.savingsGoal}>
                            <Text style={styles.accountsContentH1}>SAVINGS GOAL</Text>
                        </View>

                        <View style={styles.incomeExpenses}>
                            <TouchableOpacity style={styles.income} activeOpacity={0.5}>
                                <Text style={styles.accountsContentH1}>INCOME</Text>
                                    
                            </TouchableOpacity>

                            <View style={styles.expenses}>
                                <Text style={styles.accountsContentH1}>EXPENSES</Text>
                                <Calendar hideArrows disableMonthChange style={{borderRadius: 10}}
                                    theme={{
                                        textDayFontSize:6,
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
                            </View>
                        </View>
                    </LinearGradient>
                </View>
                </LinearGradient>
            </LinearGradient>
            
        </View> 
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
        flex: 2.5,
    },
    bottomWrapper: {
        flex: 7,
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
    savingsGoal: {
        flex: 1,
        borderColor: 'rgba(202, 205, 213, .5)',
        borderWidth: 1,
        backgroundColor: 'rgba(202, 205, 213, 0.15)',
        borderRadius: WIDTH * 0.08,
        marginVertical: 5,
        alignItems: "center",
        width: WIDTH * 0.7,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    incomeExpenses: {
        flex: 3,
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
        borderRadius: WIDTH * 0.1,
        marginLeft: 10,
        marginRight: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: "center"
    },
    expenses: {
        flex: 1,
        borderColor: 'rgba(202, 205, 213, .2)',
        borderWidth: 1,
        backgroundColor: 'rgba(100, 100, 100, 0.15)',
        // backgroundColor: 'rgba(202, 205, 213, 0.1)',
        borderRadius: WIDTH * 0.1,
        marginLeft: 5,
        marginRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        alignItems: "center"
    }
})
