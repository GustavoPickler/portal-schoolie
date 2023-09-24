import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from 'react-native-paper';

import { styles } from './styles'
import { theme } from '../../global/styles/theme';
import IllustrationImg from '../../assets/schoolieIcon.png'

type RootStackParamList = {
    SelectUserType: undefined;
    OnBoarding: undefined;
    LogIn: undefined;
};

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'OnBoarding'>;
 }

export default function OnBoarding({ navigation } : Props) {
    function navigateToLogIn() {
        navigation.navigate('LogIn')
    }

    function navigateToRegister() {
        navigation.navigate('SelectUserType')
    }

    return (
        <>
            <View style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                />
                <Text style={styles.fonts}>
                    Schoolie
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>
                    Bem vindo a sua sala virtual!
                </Text>

                <Text style={styles.subtitle}>
                    Encontre seus professores,
                    faça suas atividades e
                    tire suas dúvidas!
                </Text>
                <View style={styles.containerButton}>
                    <Button textColor={theme.colors.Black} mode='contained' style={styles.signInButton} onPress={navigateToLogIn}>Entrar</Button>
                    <Button textColor={theme.colors.White} mode='contained' style={styles.signUpButton} onPress={navigateToRegister}>Cadastre-se</Button>
                </View>
            </View>
        </>
    )
}