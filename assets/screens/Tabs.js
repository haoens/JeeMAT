import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DataStore } from 'aws-amplify';
import { useEffect } from 'react';
import Account from './Account';
import Education from './Education';
import Jeemat from './Jeemat';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {

  useEffect(() => {
    DataStore.clear()
  })

  return (
    <Tab.Navigator initialRouteName='Jeemat' screenOptions={{tabBarStyle: {display:'none'}}}>
      <Tab.Screen name="Education" component={Education} />
      <Tab.Screen name="Jeemat" component={Jeemat} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}