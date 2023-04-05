import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import LogInForm from '../../components/LogInForm'
import styles from './styles'
import IllustrationImg from '../../assets/schoolieIcon.png'

export default function LogIn() {

    const navigation = useNavigation();

    function navigateToSubmit() {
        navigation.navigate('Home' as never)
    }

    function navigateToRegister() {
        navigation.navigate('Register' as never)
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="padding" style={styles.containerFull}>
                    <View style={styles.container}>
                        <Image source={IllustrationImg} style={styles.iconImage} />
                        <Text style={styles.fonts}>
                            Schoolie
                        </Text>
                    </View>
                    <LogInForm
                        handleSubmit={navigateToSubmit}
                        handleRegister={navigateToRegister}
                    />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    )
}
