import { View, StyleSheet, Text, Image } from "react-native"
import { WIDTH, HEIGHT } from "../constants"

export default function Background( {child} ){

    return (
        <View style={styles.wrapper}>
            <View style={styles.background}>
                <View 
                    style={{
                        ...styles.cloudWrapper,
                         top: 11,
                         left: -77,
                    }}>
                    <Image source={require('../images/cloud.png')} style={CLOUD.base} />
                </View>

                <View 
                    style={{
                        ...styles.cloudWrapper,
                         top: -11,
                         left: WIDTH * 0.9,
                         transform: [{rotateY: '180deg'}]
                    }}>
                    <Image source={require('../images/cloud.png')} style={CLOUD.base} />
                </View>

                <View 
                    style={{
                        ...styles.cloudWrapper,
                        bottom: HEIGHT * 0.05,
                        left: -WIDTH * 0.1,
                        transform: [{rotateY: '180deg'}]
                    }}>
                    <Image source={require('../images/cloud.png')} style={CLOUD.base} />
                </View>
                
                <View
                    style={{
                        ...styles.cloudWrapper,
                         bottom: HEIGHT * 0.1,
                         right: -WIDTH * 0.2,
                    }}>
                    <Image source={require('../images/cloud.png')} style={CLOUD.base} />
                </View>
                
                {child()}

            </View>
        </View>
    )
}

const CLOUD = StyleSheet.create({
    base: {
        width: WIDTH * 0.6,
        height: WIDTH * 0.6 * 0.64,
        elevation: 10
    }
})

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    background: {
        flex:1,
        backgroundColor:'#65D8EC'
    },
    cloudWrapper: {
        position: 'absolute',
        width: WIDTH * 0.5,
    }

})