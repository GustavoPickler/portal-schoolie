import React from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import RegisterForm from '../../components/RegisterForm'
import IllustrationImg from '../../assets/schoolieIcon.png'
import styles from './styles'

export default function Register() {

    const navigation = useNavigation();

    function navigateToSubmit() {
        navigation.navigate('Home' as never)
    }

    function navigateToLogin() {
        navigation.navigate('LogIn' as never)
    }

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="padding" style={styles.containerFull}>
                    <View style={styles.container}>
                        <Image source={IllustrationImg} style={styles.iconImage} />
                    </View>
                    <RegisterForm
                        handleSubmit={navigateToSubmit}
                        handleLogin={navigateToLogin}
                    />
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    )
}
