import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FONTS, HEIGHT, WIDTH } from "../constants"
import Navbar from "./Navbar"
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"

export default function Education({ navigation }){

    const news = {
        date: "Jan 15 2022 06:57AM",
        publisher: "InvestorPalace",
        title: "Evaluating The Latest Inflation Threats",
        views: 4555
    }

    const courses = {
        difficulty: "Beginner",
        title: "Cryptocurrency For Beginners",
        author: "Tony Homes",
        cost: 3,
        averageRating: 4.78,
        noReviews: 4286
    }

    const [showNews, setShowNews] = useState(false)


    return (
        <View style={styles.container}>
            <LinearGradient 
                style={styles.background}
                colors={["#503793",
                        "#546ada"]}
                locations={[0, 1]}
                start={{x:1, y:0}}
                end={{x: 0, y:0}}
            >
                <Navbar title="JEEMAT" position={1} />

                <LinearGradient 
                    style={styles.content} 
                    colors={['rgba(0,0,0,0)',
                            'rgba(0,0,0,1)']} 
                    locations={[0, 0.7]}
                >   
                    <View style={styles.selector}>
                        <View
                            style={{
                                flex:1,
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    ...styles.baseBox
                                }}
                                onPress={() => setShowNews(true)}
                            >
                                <Image 
                                    source={require('../images/news.png')}
                                    style={{
                                        flex: 1,
                                        resizeMode: 'contain'
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: 'Poppins-Medium'
                                    }}
                                >
                                    News
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                alignItems: 'center'
                            }}
                            onPress={() => setShowNews(false)}
                        >
                            <View
                                style={{
                                    ...styles.baseBox
                                }}
                            >
                                <Image 
                                    source={require('../images/courses.png')}
                                    style={{
                                        flex: 1,
                                        resizeMode: 'contain',
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: 'Poppins-Medium'
                                    }}
                                >
                                    Courses
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainContent}>
                        <View style={styles.subheader}>
                            <View style={styles.subheaderSelection}>
                                <Text 
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Light'
                                    }}
                                >
                                    All
                                </Text>
                            </View>

                            <View style={styles.subheaderSelection}>
                                <Text 
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Light'
                                    }}
                                >
                                    Crypto
                                </Text>
                            </View>

                            <View style={styles.subheaderSelection}>
                                <Text 
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Light'
                                    }}
                                >
                                    Forex
                                </Text>
                            </View>

                            <View style={styles.subheaderSelection}>
                                <Text 
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Light'
                                    }}
                                >
                                    Stock
                                </Text>
                            </View>

                            
                        </View>

                        {
                            !showNews && 
                            <View style={styles.listContent}>
                            {[...Array(4)].map((_, index) => {
                                return (
                                    <View
                                        style={styles.listItems}
                                        key={index}
                                    >
                                        <View
                                            style={{
                                                flex: 2.5,
                                                paddingRight: 15
                                            }}
                                        >
                                            <Text style={styles.fontSmall}>{`${courses.difficulty.toUpperCase()}:`}</Text>
                                            <Text 
                                                style={{
                                                    fontFamily: 'Poppins-Bold',
                                                    color: 'white',
                                                    fontSize: 12
                                                }}
                                            >
                                                {courses.title}
                                            </Text>

                                            <View
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'flex-start',
                                                    justifyContent: 'space-between'
                                                }}>
                                                <Text style={styles.fontSmall}>{courses.author}</Text>
                                                
                                                <TouchableOpacity>
                                                    <LinearGradient 
                                                        colors={['#ff739d', '#c375ff', '#7986ff']}
                                                        locations={[.3, .67, 1]}
                                                        start={{x:0, y:1}} end={{x:1, y:0}}
                                                        style={{
                                                            marginTop: 3,
                                                            paddingVertical: 3,
                                                            paddingHorizontal: 4,
                                                            borderRadius: 18,
                                                            elevation: 5
                                                        }}
                                                    >
                                                        <Text 
                                                            style={{
                                                                fontFamily: 'Poppins-Medium',
                                                                fontSize: 8
                                                            }}
                                                        >
                                                            {`Purchase for ${courses.cost} coins`}
                                                        </Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <View
                                            style={{
                                                // borderWidth: 1,
                                                // borderColor: 'black',
                                                flex: 1,
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            <View
                                                style={{
                                                    flex: 1,
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <Image 
                                                    source={require('../images/hand.png')}
                                                    style={{
                                                        height: 30,
                                                        aspectRatio: 1
                                                    }}
                                                />   
                                            </View>
                                            
                                            <View
                                                style={{
                                                    flex: 1,
                                                    alignItems:'center',
                                                    justifyContent: 'flex-start'
                                                }}>
                                                    <Text
                                                        style={{
                                                            color: 'white',
                                                            fontFamily: 'Poppins-Light',
                                                            fontSize: 10
                                                        }}>
                                                        {`${courses.averageRating}/5.00 (${courses.noReviews})`}
                                                    </Text>

                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        flex: 1
                                                    }}>
                                                    {[...Array(5)].map((_, index) => {
                                                        return (<View
                                                                    key={index}
                                                                    style={{
                                                                        flex: 1,
                                                                    }}>
                                                                    <Image 
                                                                        
                                                                        source={require('../images/white-star.png')}
                                                                        style={{
                                                                            height: 12,
                                                                            resizeMode: 'contain',
                                                                            aspectRatio: 1
                                                                        }}
                                                                    />
                                                                </View>
                                                            )
                                                    })}
                                                </View>
                                            </View>
                                            
                                        </View>
                                    </View>
                                )
                            })}
                            </View>    
                        }


                        {
                            showNews && 
                            <View style={styles.listContent}>
                            {[...Array(4)].map((_, index) => {
                                return (
                                    <View
                                        style={styles.listItems}
                                        key={index}
                                    >
                                        <View 
                                            style={{
                                                alignItems:'stretch',
                                                justifyContent: 'space-evenly',
                                                flex: 3,
                                                paddingRight: 25
                                            }}
                                        >
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                
                                            }}> 
                                                <View>
                                                    <Text style={styles.fontSmall}>{news.date}</Text>
                                                </View>                       
                                                <View>
                                                    <Text style={styles.fontSmall}>{news.publisher}</Text>
                                                </View>  
                                            </View>

                                            <View>
                                                <Text
                                                    style={{
                                                        fontFamily: 'Poppins-Medium',
                                                        fontSize: 14,
                                                        color: 'white'
                                                    }}
                                                >
                                                    {news.title}
                                                </Text>
                                            </View>
                                        </View>

                                        <View
                                            style={{
                                                flex: 1
                                            }}>
                                                <View 
                                                    style={{
                                                        flex: 1,
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Image 
                                                        source={require('../images/graph.png')}
                                                        style={{flex: 1, resizeMode: 'contain'}}
                                                    />
                                                    <Text
                                                        style={styles.fontSmall}
                                                    >
                                                        Views: {news.views}    
                                                    </Text>
                                                </View>
                                        </View>
                                    </View>
                                )
                            })}
                            </View>    
                        }
                        
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
        flex: 15,
        // borderWidth: 2,
        // borderColor: 'white'
    },
    selector:{
        flex: 1,
        flexDirection: "row",
        // borderWidth: 1,
        // borderColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    baseBox: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.17)',
        alignItems: 'center',
        justifyContent: 'center',
        aspectRatio: 1,
        borderRadius: 19,
        backgroundColor: 'white',
        maxHeight: 120,
        padding: 5,
        elevation: 3
    },
    mainContent: {
        flex: 5
    },
    subheader: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
        flexDirection: "row",
        marginVertical: 15
    },
    subheaderSelection: {
        flex: 1,
        // borderColor: 'white',
        // borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    listContent: {
        flex: 10,
        flexDirection: 'column',
        // padding: 10
    },
    listItems: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        borderColor: 'rgba(255, 255, 255, 0.17)',
        borderWidth: 1,
        paddingVertical: 7,
        paddingHorizontal: 14,
        marginBottom: 18,
        borderRadius: 20
    },
    fontSmall: {
        color: 'white',
        fontFamily: 'Poppins-Light',
        fontSize: 10
    }
})