import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Account from './Account';
import Education from './Education';
import Jeemat from './Jeemat';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator initialRouteName='Jeemat' screenOptions={{tabBarStyle: {display:'none'}}}>
      <Tab.Screen name="Education" component={Education} />
      <Tab.Screen name="Jeemat" component={Jeemat} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}