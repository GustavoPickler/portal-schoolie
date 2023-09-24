import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native-paper';

import OnBoarding from '../screens/OnBoarding'
import LogIn from '../screens/LogIn'
import Register from '../screens/Register';
import Groups from '../screens/Groups';
import SelectUserType from '../screens/SelectUserType'
import Profile from '../screens/Profile';
import { SchoolieContext } from '../context/SchoolieContext';

const { Navigator, Screen } = createStackNavigator<AuthStackParamList>()

const { Navigator: BottomTabNavigator, Screen: BottomTabScreen } = createBottomTabNavigator();

export type AuthStackParamList = {
    OnBoarding: undefined;
    LogIn: undefined;
    Register: { userType: string };
    Groups: undefined;
    SelectUserType: undefined;
    Mural: { groupId: number };
    Main: undefined;
};

export default function AuthRoutes() {
    const { isCredentialsLoading, loggedUser } = useContext(SchoolieContext);

    if (isCredentialsLoading) {
        return <ActivityIndicator size="large" style={{ flex: 1 }}/>
    }

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            {!loggedUser && (
                <>
                    <Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />
                    <Screen
                        name="SelectUserType"
                        component={SelectUserType} />
                    <Screen
                        name="LogIn"
                        component={LogIn}
                    />
                    <Screen
                        name="Register"
                        component={Register}
                    />
                </>
            )}
            <Screen
                name="Main"
                component={MainNavigator}
            />
        </Navigator>
    )
}

function MainNavigator() {
    return (
        <BottomTabNavigator screenOptions={{ headerShown: false }}>
            <BottomTabScreen
                options={{
                    title: 'Grupos',
                    headerTitle: 'Grupos',
                    tabBarIcon: () => {
                        return <Feather name='users' size={20}></Feather>
                    }
                }}
                name="Groups"
                component={Groups}
            />
            <BottomTabScreen
                options={{
                    title: 'Perfil',
                    headerTitle: 'Perfil',
                    tabBarIcon: () => {
                        return <Feather name='user' size={20}></Feather>
                    }
                }}
                name="Profile"
                component={Profile}
            />
        </BottomTabNavigator>
    );
}