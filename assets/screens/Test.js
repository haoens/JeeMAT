import React, {useEffect, useState} from "react";
import { DataStore } from 'aws-amplify';
import { Biometric } from '../../src/models/index';
import { View, Text, Button } from "react-native";


export default function Test(){
    const [biometric, setBiometric] = useState();

    useEffect(() => {

        const sub = DataStore.observeQuery(Biometric, (bio) => bio.name.contains("haoen")
            ).subscribe(({items}) => {
                setBiometric(items[0])
            });
        
        return () => {
            sub.unsubscribe();
        }
    })

    return (
        <View>
            <Text>
                TEST.JS
            </Text>

            <Text>
                {biometric && `${biometric.name} ${biometric.age} ${biometric.gender}`}
            </Text>

            <Button title="New Biometric" onPress={createBiometric}/>
        </View>
    )
}

async function createBiometric(){
   await DataStore.save(
        new Biometric({
            name: 'haoen',
            age: 22,
            gender: 'male'
        })
   )
   const newBiometric = await DataStore.query(Biometric, (bio) => bio.name.contains("haoen"));
   console.log(JSON.stringify(newBiometric[0]));
}