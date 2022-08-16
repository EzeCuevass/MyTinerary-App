import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Cities from "./Cities"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Carrousel from './Carrousel';
const Tab = createBottomTabNavigator();

export default function Navbar() {
    const color = "#cfa32b"
    return (
    <Tab.Navigator
    initialRouteName="Home"
    barStyle={{ backgroundColor: '#cfa32b' }}  
    >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />)
            ,
            tabBarStyle: {backgroundColor: "#cfa32b"},
            headerShown: false
            }}/>
        <Tab.Screen 
        name="Cities" 
        component={Cities} 
        options={{
            tabBarLabel: 'Cities',
            tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="beach" color={color} size={26} />)
            ,
            tabBarStyle: {backgroundColor: "#cfa32b"},
            headerShown: false}}/>
    </Tab.Navigator>
    );
}
