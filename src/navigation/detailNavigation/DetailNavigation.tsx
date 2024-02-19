import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MyDonation from '../../screens/frontEnd/myDonation/MyDonation';
import Details from '../../screens/frontEnd/details/Details';
import DonateScreen from '../../screens/frontEnd/donate/DonateScreen';


export type RootStackParamsDetailsList={
    mydonation:undefined,
    details:undefined,
    donate:undefined
  
}
const Stack = createStackNavigator<RootStackParamsDetailsList>();

export default function DetailNavigation() {
  return (
    <Stack.Navigator >
    <Stack.Screen options={{ headerShown: false }} name='mydonation' component={MyDonation}/>
    <Stack.Screen options={{ headerShown: false }} name='details' component={Details}/>
    <Stack.Screen options={{ headerShown: false }} name='donate' component={DonateScreen}/>
    </Stack.Navigator>
  )
}