import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import MainBackground from "../components/main-background";
import { MYR, TIME_FORMATTER, USER_MEGAN, WIDTH } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { add, differenceInCalendarWeeks, differenceInCalendarDays, differenceInMonths } from "date-fns";
import { DataStore } from "aws-amplify";
import { Goal } from "../../src/models";

export default function Savings4({ route, navigation }){

    const [goal, setGoal] = useState({})


    let name, amount, months, method, type
    if (route.params){
        name = route.params.name ? route.params.name : ""
        amount= route.params.amount ? route.params.amount : 0
        months = route.params.months ? route.params.months[0] : 0
        method = route.params.method ? route.params.method : "auto"
        type = route.params.type ? route.params.type : "gadget"
    }
    console.log(name, amount, months, method, type)
    const [frequency, setFrequency] = useState("")

    const startDate = new Date();
    const endDate = add(startDate, {
        months
    })

    const days = differenceInCalendarDays(endDate, startDate)
    const weeks = differenceInCalendarWeeks(endDate, startDate)

    const createGoal = async () => {
        const newGoal = await DataStore.save(
            new Goal({
                user_id: USER_MEGAN.email,
                type,
                name,
                amount,
                days_to_save: days,
                method,
                frequency,
                status: 'active',
                days_late: 0,
                savings_late: 0,
                savings_cumulated: 0
                // to-do: add savings cumulated
            })
        )
        console.log(JSON.stringify(newGoal))
    }

    function RenderField( {param, value} ){
        
        
        return (
            <View
                style={styles.baseField}
            >
                <Text
                    style={{
                        fontFamily: 'Poppins-Medium',
                        color: 'white',
                        fontSize: 18
                    }}
                >
                    {param}
                </Text>

                <Text
                    style={styles.poppinsBoldLarge}
                >
                    {value}
                </Text>
            </View>
        )
    }

    function renderSavings4(){
        return (
            <SafeAreaView style={{flex: 1}}>
                <View
                    style={{
                        flex: 0.15,
                        margin: 20,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            left: 0
                        }}
                        onPress={() => navigation.navigate("Savings2", {
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
                        flex: 1,
                        marginHorizontal: 20,
                        marginBottom: 30
                    }}
                >
                    <Text
                        style={[styles.poppinsBoldLarge, {
                            marginBottom: 10
                        }]}
                    >
                        Saving Goal Details: 
                    </Text>

                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            borderColor: 'rgba(255, 255, 255, 0.17)',
                            borderRadius: 20,
                            paddingHorizontal: 20,
                            paddingVertical: 12
                        }}
                    >
                        <RenderField 
                            param={"Name"} 
                            value={name} 
                        />
                        <RenderField 
                            param={"Target Amount"}
                            value={MYR.format(amount)}
                        />
                        <RenderField 
                            param={"Start Date"} 
                            value={TIME_FORMATTER.format(startDate).toLocaleUpperCase()} 
                        />
                        <RenderField 
                            param={"End Date"} 
                            value={TIME_FORMATTER.format(endDate).toLocaleUpperCase()}
                        />                

                    </View>
                </View>

                <View
                    style={{
                        flex: 1.2,
                        backgroundColor: 'black',
                        borderRadius: 28,
                        padding: 35
                    }}
                >
                    <Text
                        style={{
                            color: 'rgba(255, 147, 189, 1)',
                            fontFamily: 'Poppins-Medium',
                            fontSize: 20,
                            textAlign: 'center'
                        }}
                    >
                        Select Frequency v
                    </Text>

                    <View
                        style={{
                            marginTop: 15
                        }}
                    >
                        <TouchableOpacity
                            style={styles.frequencyWrapper}
                            onPress={() => setFrequency("daily")}
                        >
                            <Text
                                style={frequency === "daily" ? styles.selectedFrequency : styles.frequencySelection}
                            >
                                {'\u2022'} Daily: {MYR.format(amount / days)} for {days} days
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            style={styles.frequencyWrapper}
                            onPress={() => setFrequency("weekly")}
                        >
                            <Text
                                style={frequency === "weekly" ? styles.selectedFrequency : styles.frequencySelection}
                            >
                                {'\u2022'} Weekly: {MYR.format(amount / weeks)} for {weeks} weeks
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            style={styles.frequencyWrapper}
                            onPress={() => setFrequency("monthly")}
                        >
                            <Text
                                style={frequency === "monthly" ? styles.selectedFrequency : styles.frequencySelection}
                            >
                                {'\u2022'} Monthly: {MYR.format(amount / months)} for {months} months
                            </Text>
                        </TouchableOpacity>
                        
                        <Text
                            style={{
                                color: 'white',
                                // textAlign: 'center',
                                marginTop: 20,
                                marginHorizontal: 30,
                                fontSize: 14
                            }}
                        >
                            By clicking confirm, I confirmed that I agree to follow 
                            <Text
                                style={{
                                    fontFamily: 'Poppins-Bold'
                                }}
                            >
                                {'\ '}Terms & Conditions
                            </Text>
                        </Text>
                    </View>

                    {(frequency != "") && 

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    marginHorizontal: WIDTH * 0.2,
                                    marginTop: 20
                                }}
                                onPress={async () => {
                                    try{
                                        createGoal()
                                        navigation.navigate('Savings5')
                                    }
                                    catch(err){
                                        console.log(err)
                                        navigation.navigate('Savings')
                                    }
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
                                    Confirm
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        }
                </View>
            </SafeAreaView>
        )
    }
    
    return (
        <MainBackground content={renderSavings4} />
    )
}

const styles = StyleSheet.create({
    poppinsBoldLarge: {
        fontFamily: 'Poppins-Bold',
        color: 'white',
        fontSize: 18
    },
    debugBorder: {
        borderColor: 'white',
        borderWidth: 1
    },
    baseField: {
        flex: 1,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    frequencySelection: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 1)',
        paddingHorizontal: 10,
        marginVertical: 5,
        textAlign: 'center'
    },
    frequencyWrapper:{
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 5
    },
    selectedFrequency: {
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 1)',
        paddingHorizontal: 10,
        marginVertical: 5,
        textAlign: 'center'
    }
})


