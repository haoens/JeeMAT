import {SafeAreaView, View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import MainBackground from "../components/main-background";

export default function Savings3({navigation}){
    function renderSavings3(){
        return(
        <SafeAreaView
                style={{
                    flex: 1,
                    marginHorizontal: 35,
                    marginTop: 35
                }}  
            >   

            <View
            style={{
                flex: 1,
                marginHorizontal: 15
            }}>
                <Text
                style={[styles.theQuestion]}>
                What Do You Want To Save For?</Text>
            </View>

            <View
                style={{
                    flex: 1
                }}
            >
                <Text
                    style={[styles.the5text]}
                >
                    General Savings
                </Text>
                <Text
                style={[styles.the5text]}>
                Motor Vehicles</Text>
                <Text
                style={[styles.the5text]}>
                House</Text>
                <Text
                style={[styles.the5text]}>
                Marriage</Text>
                <Text
                style={[styles.the5text]}>
                Gadgets</Text>
                </View>
                
                {/* <button style={{
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px'
}}>
    <text>General Savings</text>
</button> */}
        </SafeAreaView>
    )}
    return (
        <MainBackground content={renderSavings3} />
      )
}

const styles = StyleSheet.create({
    theQuestion:{
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: 'white'

    },
    the5text: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: 'white'
    }
  });