import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import OnBoarding from '../screens/OnBoarding'
import LogIn from '../screens/LogIn'
import Register from '../screens/Register';
import Home from '../screens/Home';
import Mural from '../screens/Mural';

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>()

export type AuthStackParamList = {
    OnBoarding: undefined;
    LogIn: undefined;
    Register: undefined;
    Home: undefined;
    Mural: { groupId: string };
  };

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
                component={OnBoarding}
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
            <Screen
                name="Mural"
                component={Mural}
            />
        </Navigator>
    )
}