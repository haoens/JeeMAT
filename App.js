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
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Jeemat" component={Jeemat}/>
          <Stack.Screen name="Spend" component={Spend} options={{animation:"slide_from_bottom"}}/>
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
