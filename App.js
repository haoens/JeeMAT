import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Navbar from './assets/components/Navbar';
import { LinearGradient } from 'expo-linear-gradient';
import Jeemat from './assets/screens/Jeemat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './assets/screens/Account';
import Spend from './assets/screens/Spend';
import Login from './assets/screens/Login';
import Tabs from './assets/screens/Tabs';
import Game from './assets/screens/Game';
import Level from './assets/screens/Level';
import Signup from './assets/screens/Signup';
import RevealCoins from './assets/screens/RevealCoins';
import Savings from './assets/screens/Savings';
import Savings1 from './assets/screens/Savings1';
import Savings2 from './assets/screens/Savings2';
import Savings3 from './assets/screens/Savings3';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import Test from './assets/screens/Test';
import { LogBox } from 'react-native';

Amplify.configure(awsconfig)
SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <StatusBar style="auto" hidden/>
          <Stack.Navigator initialRouteName='Savings3' screenOptions={{headerShown: false}}>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Test" component={Test} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Tabs" component={Tabs}/>
            <Stack.Screen name="Spend" component={Spend} />
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Level" component={Level} />
            <Stack.Screen name="RevealCoins" component={RevealCoins} />
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Savings" component={Savings} />
            <Stack.Screen name="Savings1" component={Savings1} />
            <Stack.Screen name="Savings2" component={Savings2} />
            <Stack.Screen name="Savings3" component={Savings3} />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    // alignItems: 'center'
  }
});
