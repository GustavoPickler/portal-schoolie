import React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from 'react-native-elements';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import LogInForm from '../../components/LogInForm'
import styles from './styles'
import IllustrationImg from '../../assets/schoolieIcon.png'
import { theme } from '../../global/styles/theme';
import useLogin from '../../hooks/useLogin';

export interface User {
    email: string,
    password: string;
}

type LoginStackParamList = {
    LogIn: undefined;
    Main: undefined;
    SelectUserType: undefined;
}

type Props = NativeStackScreenProps<LoginStackParamList, 'LogIn'>;

export default function LogIn({ navigation }: Props) {
    const { doLogin } = useLogin();

    async function navigateToSubmit(user: User) {
        const success = await doLogin(user);

        if (!success) {
            return;
        }

        navigation.navigate('Main');
    }

    function navigateToRegister() {
        navigation.navigate('SelectUserType');
    }

    function navigateBack() {
        navigation.goBack();
    }

    return (
        <>
            <SafeAreaView style={{flex: 1}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={styles.header}>
                            <Icon name='arrow-left' type='font-awesome' color={theme.colors.Orange} size={20} onPress={navigateBack}></Icon>   
                        </View>
                        <View style={styles.containerFull}>
                                <View style={styles.container}>
                                    <Image source={IllustrationImg} style={styles.iconImage} />
                                </View>
                                <LogInForm
                                    handleSubmit={navigateToSubmit}
                                />
                        </View>
                    </KeyboardAwareScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    )
}
