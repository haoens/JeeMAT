import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Navbar from './assets/components/Navbar';
import { LinearGradient } from 'expo-linear-gradient';
import Jeemat from './assets/components/Jeemat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spend from './assets/components/Spend';
import Login from './assets/components/Login';
import Tabs from './assets/components/Tabs';
import Game from './assets/components/Game';
import Level from './assets/components/Level';


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
  
  
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="auto" hidden/>
        <Stack.Navigator initialRouteName='Game' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Tabs" component={Tabs}/>
          <Stack.Screen name="Spend" component={Spend} />
          <Stack.Screen name="Game" component={Game} />
          <Stack.Screen name="Level" component={Level} />
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
