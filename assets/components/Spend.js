import { FONTS } from "../constants";
import { Text, View } from "react-native";

export default function Spend(){
    return (
        <View>
            <Text style={{...FONTS.header, color: 'black'}}>
                SPEND
            </Text>
        </View>
    )
}