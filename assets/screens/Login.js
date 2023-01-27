import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { FONTS, HEIGHT, WIDTH } from '../constants';


export default function Login({ navigation }) {
	return (
		<View style={styles.wrapper}>
			<LinearGradient 
                colors={['black', '#442f79', 'black']} 
                locations={[0, 0.25, 0.6]} 
                style={styles.background}
            >
                <SafeAreaView style={styles.topWrapper}>
                    <View style={styles.logoWrapper}>
                        <Image 
                            source={require('../images/Logo.png')}
                            style={{width: 36, height: 36, marginRight: 10}}/>
                        <Text style={{...FONTS.header, fontSize:20}}>JEEMAT</Text>
                    </View>

                    <View style={styles.firstCard}>
                        <Image
                            source={require('../images/Visa.png')}
                            style={{
                                transform:[{rotateX: '-50deg'}, 
                                            {rotateY: '20deg'},
                                            {rotateZ: '58deg'}],
                                width: 180, height: 90,
                            }} 
                        />
                    </View>

                    <View style={styles.secondCard}>
                        <Image
                                source={require('../images/VisaBlue.png')}
                                style={{
                                    transform:[{rotateX: '-50deg'}, 
                                                {rotateY: '20deg'},
                                                {rotateZ: '58deg'}],
                                    width: 180, height: 90,
                                }} 
                        />
                    </View>

                    <LinearGradient 
                        colors={['#9D76E3', '#85B9F3']}
                        start={{x:0, y:1}}
                        style={styles.thirdCard}
                    >
                        <Image
                            source={require('../images/mastercard.png')}
                            style={{
                                transform:[{rotateZ: '0deg'}, 
                                            {rotateY: '40deg'}, 
                                            {rotateX: '0deg'}],
                                width: 100, height: 62
                            }}
                        />
                    </LinearGradient>

                </SafeAreaView>
                <SafeAreaView style={styles.bottomWrapper}>
                    <Text style={styles.motto}>
                        {`Start taking control ${'\n'}of your finances`}
                    </Text>

                    <View style={styles.bottomMidWrapper}>
                        <TouchableOpacity style={styles.startWrapper}>
                            <LinearGradient 
                                colors={['#ff739d', '#c375ff', '#7986ff']}
                                locations={[.3, .67, 1]}
                                start={{x:0, y:1}} end={{x:1, y:0}} 
                                style={styles.startWrapper1} 
                                onTouchEnd={() => navigation.navigate('Tabs')}
                            >
                                <Text 
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Poppins-Medium'
                                    }}
                                >
                                    Get Started
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        

                        <View style={styles.apple}>
                            <Image 
                                source={require('../images/apple.png')}
                                style={{width: WIDTH * 0.08,
                                    height:WIDTH * 0.08}}
                            />
                        </View>

                        <View style={styles.google}>
                            <Image 
                                source={require('../images/Google.png')}
                                style={{width: WIDTH * 0.08,
                                    height:WIDTH * 0.08}}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.bottomBottomWrapper}>
                        <Text style={{ color: 'gray', fontFamily: 'Poppins-Light', marginRight: 5}}>
                                Have an account? 
                        </Text>
                        <Text style={{ color: 'white', fontFamily: 'Poppins-Light'}}> 
                            Sign In 
                        </Text>
                    </View>
                </SafeAreaView>
			</LinearGradient>
		</View>
	);
}


const CARD_BASE = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 40,
        position: 'absolute',
        width:'110%',
        height:'70%',
        left: WIDTH * 0.20,
        transform: [{rotateZ: '-30deg'}, 
                    {rotateY: '30deg'}, 
                    {rotateX: '55deg'}],
    }
})

const IMAGE_WRAPPER = StyleSheet.create({
    base: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 15
    }
})

const BORDER_WRAPPER = StyleSheet.create({
    border: {
        borderWidth: 1,
        borderColor: 'white',
    }
})

const styles = StyleSheet.create({
    wrapper:{
        flex: 1
    },
    background: {
        flex: 1
    },
    topWrapper: {
        flex: 5,
        flexDirection: 'row',
        alignItems: "flex-start",
        marginHorizontal: 20,
        paddingVertical: 10
    },
    bottomWrapper: {
        flex: 2.5,
        marginHorizontal: 20,
    },
    logoWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    firstCard: {
        ...CARD_BASE.card,
        backgroundColor: 'rgb(224,220,220)',
        zIndex: 3,
        top: HEIGHT * -0.05,
    },
    secondCard: {
        ...CARD_BASE.card,
        backgroundColor: 'rgb(255,255,255)',
        zIndex: 2,
        top: HEIGHT * 0.09
    },
    thirdCard: {
        ...CARD_BASE.card,
        zIndex: 1,
        top: HEIGHT * 0.23,
        backgroundColor: '#d0b5ec',
        borderColor: '#d0b5ec',
        paddingHorizontal: 10,
        paddingVertical: 25
    },
    motto: {
        fontSize: 26,
        color: 'white',
        fontFamily: 'Poppins-Medium'
    },
    bottomMidWrapper: {
        // ...BORDER_WRAPPER.border,
        // borderWidth:1,
        // borderColor: 'white',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flex: 2,
        marginVertical: 20,
        marginRight: 15,
    },
    startWrapper: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: WIDTH * 0.04,
        marginRight: WIDTH * 0.02,
    },
    startWrapper1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: WIDTH * 0.04,
        paddingHorizontal: WIDTH * 0.1
        // marginRight: WIDTH * 0.02
    },
    apple: {
        flex: 1,
        ...BORDER_WRAPPER.border,
        marginRight: WIDTH * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        aspectRatio: 1,
    },
    google: {
        ...BORDER_WRAPPER.border,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        aspectRatio: 1,
        flex: 1
    },
    bottomBottomWrapper: {
        flex: 1.5,
        flexDirection: 'row'
    },
    bottomTextGray: {
        fontSize: 14,
        color: 'gray'
    }
})

