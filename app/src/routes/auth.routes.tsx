import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import OnBoarding from '../screens/OnBoarding'
import LogIn from '../screens/LogIn'
import Register from '../screens/Register';
import Home from '../screens/Home';

const { Navigator, Screen } = createStackNavigator()

export default function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="OnBoarding"
                component={Home}
            />
            <Screen
                name="LogIn"
                component={LogIn}
            />
            <Screen
                name="Register"
                component={Register}
            />
            <Screen
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}