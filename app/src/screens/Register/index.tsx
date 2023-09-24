import React, { useContext } from 'react';
import { View, Image, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from 'react-native-elements';
import { isAxiosError } from 'axios';

import { ResponsibleRegisterProps, StudentRegisterProps, TeacherRegisterProps, UserRegisterProps } from './interfaces';
import RegisterForm from '../../components/RegisterForm'
import IllustrationImg from '../../assets/schoolieIcon.png'
import styles from './styles'
import { createResponsible, createStudent, createTeacher } from '../../services/UserAccountService';
import useSnackbar from '../../hooks/useSnackbar';
import useLogin from '../../hooks/useLogin';

type RootStackParams = {
    SelectUserType: { userType: string };
    Main: undefined;
    Register: undefined;
}

type Props = NativeStackScreenProps<RootStackParams, 'Register' >;

export default function Register({ navigation, route }: Props) {

    const { showSnackbar } = useSnackbar();
    const { doLogin } = useLogin();
    const userType = route.params.userType;

    async function navigateToSubmit(user: UserRegisterProps) {
        try {
            switch (userType) {
                case 'STUDENT':
                    await createStudent(user as StudentRegisterProps);
                    break;
                case 'RESPONSIBLE':
                    await createResponsible(user as ResponsibleRegisterProps);
                    break;
                case 'TEACHER':
                    await createTeacher(user as TeacherRegisterProps);
                    break;
            }

        } catch (err) {
            if (isAxiosError(err) && err.response && err.response.status >= 400 && err.response.status <= 499) {
                showSnackbar({ message: err.response.data }) //TODO: rever mensagem de erro
                return;
            }
            showSnackbar({ message: 'Um erro inesperado aconteceu! Tente novamente, por favor.' });
            return;
        }

        const success = await doLogin(user);

        if (!success) {
            return;
        }

        navigation.navigate('Main');
    }

    function navigateBack() {
        if (navigation.canGoBack()) {
            navigation.goBack();
            return;
        }

        navigation.navigate('SelectUserType', { userType });
    }

    return (
        <>
            <SafeAreaView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <KeyboardAwareScrollView>
                        <TouchableWithoutFeedback onPress={navigateBack}>
                            <Icon name="arrow-back-outline" type="ionicon" size={30} style={{ padding: 20, alignSelf: 'flex-start' }}></Icon>
                        </TouchableWithoutFeedback>
                        <View style={styles.containerFull}>
                            <View style={styles.container}>
                                <Image source={IllustrationImg} style={styles.iconImage} />
                            </View>
                            <RegisterForm
                                handleSubmit={navigateToSubmit}
                                userType={userType}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    )
}
