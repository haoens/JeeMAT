import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, {useState} from "react";
import { Button, SafeAreaView, TextInput, Text } from "react-native";
import { auth } from "../../firebaseConfig";
import { Auth } from "aws-amplify";


export default function Signup({navigation}){
    // const auth = getAuth();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // function handleSubmitForm(){
    //     if (password !== confirmPassword) {
    //         console.log("password and confirm password not same")
    //         return 
    //     }


    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         console.log("user successfully created")
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log("user already exists")

    //         // ..
    //     });
    // }


    async function signUp() {
        if (password != confirmPassword) {
            return null
        }
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email: username,          // optional
                    // phone_number,   // optional - E.164 number convention
                    // other custom attributes 
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                },
            });
            console.log(user);
            navigation.navigate("Tabs");
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    return (
        <SafeAreaView>

            <Text>
                Username:
            </Text>
            <TextInput
                style={{}}
                onChangeText={setUsername}
                value={username}
                textContentType="emailAddress"
                placeholder="Enter email"
            />

            {/* <Text>
                Email:
            </Text>
            <TextInput
                style={{}}
                onChangeText={setEmail}
                value={email}
                textContentType="emailAddress"
                placeholder="example.xxx@email.com"
            /> */}

            <Text>
                Password:
            </Text>
            <TextInput
                style={{}}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter password"
                textContentType="password"
                secureTextEntry={true}
            />

            <TextInput
                style={{}}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder="Enter password"
                textContentType="password"
                secureTextEntry={true}
            />  

            <Button title="Submit" onPress={signUp}></Button>
        </SafeAreaView>
    )
}