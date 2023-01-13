import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { FONTS, HEIGHT, WIDTH } from '../constants';


export default function Login({ navigation }) {
	return (
		<View style={styles.wrapper}>
			<LinearGradient colors={['black', '#442f79', 'black']} locations={[0, 0.25, 0.6]} style={styles.background}>
                <View style={styles.topWrapper}>
                    <View style={styles.logoWrapper}>
                        <Image 
                            source={require('../images/Logo.png')}
                            style={{width: 36, height: 36, marginRight: 10}}/>
                        <Text style={{...FONTS.header, fontSize:20}}>JEEMAT</Text>
                    </View>

                    <View style={styles.firstCard}>

                    </View>

                    <View style={styles.secondCard}>
                        
                    </View>

                    <LinearGradient 
                        colors={['#9D76E3', '#85B9F3']}
                        start={{x:0, y:1}}
                        style={styles.thirdCard}
                    >
                        
                    </LinearGradient>

                </View>
                <View style={styles.bottomWrapper}>
                    <Text style={styles.motto}>
                        {`Start taking control ${'\n'}of your finances`}
                    </Text>

                    <View style={styles.bottomMidWrapper}>
                        <View style={styles.startWrapper}>

                        </View>

                        <View style={styles.apple}>

                        </View>

                        <View style={styles.google}>
                            
                        </View>
                    </View>

                </View>
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
        transform: [{rotateZ: '-30deg' }, {rotateY: '30deg'}, {rotateX: '55deg'}],
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
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    bottomWrapper: {
        flex: 2.5,
        paddingHorizontal: 20,
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
        borderColor: '#d0b5ec'
    },
    motto: {
        fontSize: 26,
        color: 'white',
        fontFamily: 'Poppins-Medium'
    },
    bottomMidWrapper: {

    },
    startWrapper: {
        flex: 2.5
    },
    google: {
        flex: 1
    },
    apple: {
        flex: 1
    }
})

