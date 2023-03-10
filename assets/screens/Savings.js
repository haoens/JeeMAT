import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { WIDTH, HEIGHT, USER_MEGAN } from "../constants";
import React, { useEffect, useState } from "react";
import 'intl';
import 'intl/locale-data/jsonp/ms'
import 'intl/locale-data/jsonp/en'
import { DataStore } from "aws-amplify";
import { Goal } from "../../src/models";

const MYR = new Intl.NumberFormat('ms-MY', {
    style: 'currency',
    currency: 'MYR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
});

const removeGoal = async (targetGoal) => {
    console.log(targetGoal.id)
    await DataStore.delete(Goal, (goal) => goal.id.eq(targetGoal.id))
}


export default function Savings({ route, navigation }){

    const [goals1, setGoals1] = useState([]);

    const goals = [
        {
            name: "Proton X70",
            dueDate: new Date("2032-06-06"),
            savings_cumulated: 60000,
            amount: 90000,
            type: "motor_vehicles"
        },
        {
            name: "Marriage",
            dueDate: new Date("2028-05-06"),
            savings_cumulated: 4000,
            amount: 10000,
            type: "marriage"
        },
    ]
 

    useEffect(() => {
        /**
         * This keeps `todo` fresh.
         */
        
        const sub = DataStore.observeQuery(Goal, (g) => g.user_id.eq(USER_MEGAN.email)
        ).subscribe(({ items }) => {
          setGoals1(items);
        //   console.log("goals: ", JSON.stringify(goals1))
        });
    
        return () => {
          sub.unsubscribe();
        };
      }, []);

    // console.log("goals: ", JSON.stringify(goals1))

    return (
        <View
            style={{
                flex:1 
            }}
        >
            <LinearGradient 
                style={styles.background}
                colors={["#503793",
                        "#546ada"]}
                // locations={[0, 1]}
                start={{x:0, y:0}}
                end={{x: 1, y:0}}
            >   


                <LinearGradient 
                    style={styles.content} 
                    colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} 
                    locations={[0, 1]}
                >
                    <SafeAreaView style={{flex: 1}}>
                        
                        <View
                            style={styles.topWrapper}
                        >
                            <View 
                                style={{
                                    flexDirection: 'row', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    flex: 0.5,
                                }}
                            >
                                
                                <TouchableOpacity
                                    style={{
                                        position: 'absolute',
                                        left: 0
                                    }}
                                    onPress={() => navigation.navigate("Tabs")}
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
                                

                            
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontFamily: 'Poppins-ExtraBold',
                                        color: 'white',
                                        fontSize: 18,
                                    }}
                                >
                                    SafeHouse
                                </Text>
                            </View>
                            

                            <View
                                style={{
                                    flex: 3,
                                    flexDirection: "row",
                                    justifyContent: 'center',
                                    marginVertical: 20
                                }}>
                                <View
                                    style={{
                                        backgroundColor: 'white',
                                        width: HEIGHT * 0.2,
                                        height: HEIGHT * 0.2,
                                        borderRadius: HEIGHT * 0.2,                            
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 30,
                                        elevation: 10
                                    }}>
                                        <Image
                                            style={{
                                                resizeMode: 'contain',
                                                flex: 1,
                                                aspectRatio: 1
                                            }} 
                                            source={require('../images/bank.png')}
                                        />
                                </View>
                            </View>

                            <View
                                style={{
                                    flex: 1.5,
                                    borderColor: 'rgba(255, 255, 255, 0.17)',
                                    borderWidth: 1,
                                    borderRadius: 20,
                                    paddingVertical: 10,
                                    marginHorizontal: 50,
                                    flexDirection: 'row'
                                }}
                            >
                                <View
                                    style={[styles.baseSetting]}
                                >
                                    <View
                                        style={[styles.settingImageWrapper]}
                                    >
                                        <Image
                                            style={styles.settingImage}
                                            source={require('../images/error.png')}
                                        />
                                    </View>

                                    <Text style={styles.settingText}>
                                        Error
                                    </Text>
                                </View>
                                
                                <View
                                    style={[styles.baseSetting]}
                                >
                                    <View
                                        style={[styles.settingImageWrapper]}
                                    >
                                        <Image
                                            style={styles.settingImage}
                                            source={require('../images/download.png')}
                                        />
                                    </View>

                                    <Text style={styles.settingText}>
                                        Download
                                    </Text>
                                </View>
                            </View>
                        </View>
                        
                    
                            
                        <View style={styles.bottomWrapper}>
                            <View
                                style={{
                                    flex: 0.8,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginBottom: 15
                                }}
                            >

                                <Text
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Medium',
                                        fontSize: 20,
                                        
                                    }}
                                >
                                    Saving Goals:
                                </Text>

                                
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontFamily: 'Poppins-Medium',
                                            fontSize: 20,
                                            color: 'rgba(255, 147, 189, 1)'
                                        }}
                                    >
                                        Sort By
                                    </Text>
                                    
                                    <Image 
                                        source={require('../images/down-arrow.png')}
                                        style={{
                                            width: 10,
                                            marginLeft: 15
                                        }}    
                                    />
                                </View>
                                
                            </View>
                            
                            <View 
                                style={{
                                    flex:5,
                                    marginBottom: 20
                                }} 
                            >
                                <ScrollView
                                    contentContainerStyle={{
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        // borderColor: 'white',
                                        // borderWidth: 1,
                                        flexGrow: 1
                                    }}
                                    showsVerticalScrollIndicator={false}
                                >
                                    {[...goals, ...goals1].map((goal) => renderGoal(goal))}

                                </ScrollView>
                            </View>

                            <TouchableOpacity
                                style={{
                                    flex: 1.5,
                                    alignItems: 'center'
                                }}
                            >
                                <LinearGradient 
                                    colors={['#ff739d', '#c375ff', '#7986ff']}
                                    locations={[.3, .67, 1]}
                                    start={{x:0, y:1}} end={{x:1, y:0}} 
                                    style={{
                                        width: WIDTH * 0.5,
                                        flex: 1,
                                        borderRadius: 18,
                                        justifyContent: 'center',
                                        borderColor: 'rgba(255, 255, 255, 0.17)',
                                        borderWidth: 1,
                                        paddingVertical: 20,
                                        paddingHorizontal: 15
                                    }} 
                                    onTouchEnd={() => navigation.navigate('Savings3')}
                                >
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            fontFamily: 'Poppins-Medium',
                                            fontSize: 16,

                                        }}
                                    >
                                        Add Saving Goals
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>

                    </SafeAreaView>
                    
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}

function mapGoalImage(type){

    switch (type) {
        case "marriages":
            return require('../images/marriage.png')
        case "gadgets":
            return require('../images/gadgets.png')
        case "motor_vehicles":
            return require('../images/motor_vehicles.png')
        default:
            return require('../images/marriage.png')
    }
    
}

function renderGoal(goal) {
    return (
        <TouchableOpacity
            style={{
                marginBottom: 30,
                flexDirection: 'row'
            }}
            onLongPress={() => removeGoal(goal)}
        >
            <View
                style={{
                    height: 60,
                    width: 60,
                    borderRadius: 30,
                    backgroundColor: 'white',   
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={mapGoalImage(goal.type)}
                    style={{
                        resizeMode: 'contain',
                        flex: 0.75
                    }}
                />
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 18,
                    flexGrow: 1,
                    // borderColor: 'white',
                    // borderWidth: 1,
                    justifyContent: 'space-between'
                }}
            >
                <View style={{flex: 1}}>
                    <Text
                        style={{
                            fontFamily: 'Poppins-Medium',
                            color: 'white',
                            fontSize: 16
                        }}
                    >
                        {goal.name}
                    </Text>

                    <Text
                        style={{
                            fontFamily: 'Poppins-Medium',
                            color: 'rgba(255, 255, 255, 0.5)',
                            fontSize: 12
                        }}
                    >
                        BY {new Intl.DateTimeFormat('en-uk', { dateStyle: 'long'}).format(goal.dueDate).toLocaleUpperCase()}
                    </Text>
                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        flex: 0.8
                    }}
                >
                    <View
                        style={{
                            backgroundColor: 'white',
                            height: 35,
                            borderRadius: 20,
                            marginBottom: 5,
                            flexDirection: 'row',
                            overflow: 'hidden'
                        }}
                    >
                        <View 
                            style={{
                                backgroundColor: 'rgba(63, 172, 45, 0.95)',
                                height: 35,
                                flex: goal.savings_cumulated / goal.amount,
                                borderRadius: 20
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text
                            style={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontSize: 10,
                                fontFamily: 'Poppins-Medium'
                            }}
                        >
                            {MYR.format(goal.savings_cumulated)}
                        </Text>

                        <Text
                            style={{
                                color: 'rgba(255, 255, 255, 0.5)',
                                fontSize: 10,
                                fontFamily: 'Poppins-Medium'
                            }}
                        >
                           {MYR.format(goal.amount.toFixed(0))}
                        </Text>
                    </View>
                </View>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    content: {
        flex: 9,
        // borderWidth: 2,
        // borderColor: 'white'
    },
    topWrapper: {
        flex: 1.8,
        zIndex: 2,
        marginHorizontal: 20,
        marginVertical: 15
    },
    bottomWrapper: {
        flex: 2,
        // backgroundColor: "rgba(0,0,0,0.4)",
        borderTopLeftRadius: WIDTH * 0.05,
        borderTopRightRadius: WIDTH * 0.05,
        width: WIDTH,
        // alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 30,
        paddingHorizontal: 20,
        backgroundColor: 'black'
    },
    baseSetting: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    settingImageWrapper: {
        marginBottom: 10
    },
    settingImage: {
        height: 35,
        aspectRatio: 1
    },
    settingText: {
        color: 'white',
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 14,
        textAlign: 'center'
    }
})