import React, { useState } from "react"
import { TextInput, Button, HelperText, Text } from 'react-native-paper'
import { View } from 'react-native'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { } from 'react-native'
import { styles } from "./styles"
import IF from '../IFComponent'

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRegex = /^'?\p{L}+(?:[' ]\p{L}+)*'?$/u

interface Props {
    handleSubmit: () => void;
    handleLogin: () => void;
}


export default function RegisterForm({ handleSubmit, handleLogin }: Props) {

    const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true)

    const SignupSchema = Yup.object().shape({
        userName: Yup.string()
            .matches(nameRegex, 'Não é possível inserir caracteres inválidos')
            .min(3, 'Seu nome deve conter pelo menos 3 letras!')
            .max(30, 'Seu nome deve conter no máximo 30 letras!')
            .required('Você deve informar um nome de usuário!'),
        email: Yup.string()
            .matches(emailRegex, 'Você deve informar um email válido')
            .required('Você deve informar seu email!'),
        cellPhone: Yup.string()
            .required("Você deve informar um número de celular!")
            .test('len', 'Informe um número de celular válido!', val => val.length != 15),
        password: Yup.string()
            .required('Você deve informar uma senha!')
            .min(8, 'Sua senha deve conter no minímo 8 letras!'),
        passwordConfirmation: Yup.string()
            .required('Você deve informar uma senha!')
            .oneOf([Yup.ref('password')], 'Confirmação de senha inválida!')
    });

    const formik = useFormik({
        initialValues: {
            userName: '',
            userLogin: '',
            email: '',
            cellPhone: '',
            password: '',
            passwordConfirmation: ''
        },
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema: SignupSchema,
        onSubmit: () => {
            handleSubmit()
        },
    })

    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <TextInput
                        mode='outlined'
                        returnKeyType='next'
                        label='Nome'
                        value={formik.values.userName}
                        onChangeText={formik.handleChange('userName')}
                        onBlur={formik.handleBlur('userName')}
                    />
                    <IF condition={!!formik.errors.userName && !!formik.touched.userName}>
                        <HelperText type='error'>{formik.errors.userName}</HelperText>
                    </IF>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        mode='outlined'
                        returnKeyType='next'
                        label='Email'
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                    />
                    <IF condition={!!formik.errors.email && !!formik.touched.email}>
                        <HelperText type='error'>{formik.errors.email}</HelperText>
                    </IF>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        mode='outlined'
                        placeholder="Digite o telefone"
                        keyboardType="phone-pad"
                        onChangeText={formik.handleChange('cellPhone')}
                        onBlur={formik.handleBlur('cellPhone')}
                        maxLength={15}
                    />
                    <IF condition={!!formik.errors.cellPhone && !!formik.touched.cellPhone}>
                        <HelperText type='error'>{formik.errors.cellPhone}</HelperText>
                    </IF>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        value={formik.values.password}
                        returnKeyType='next'
                        onChangeText={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        right={
                            <TextInput.Icon
                                onPress={() =>
                                    secureTextEntryPassword
                                        ? setSecureTextEntryPassword(false)
                                        : setSecureTextEntryPassword(true)
                                }
                                icon='eye'
                            />
                        }
                        mode='outlined'
                        label='Senha'
                        secureTextEntry={secureTextEntryPassword}
                    />
                    <IF condition={!!formik.errors.password && !!formik.touched.password}>
                        <HelperText type='error'>{formik.errors.password}</HelperText>
                    </IF>
                </View>

                <View style={styles.containerInput}>
                    <TextInput
                        value={formik.values.passwordConfirmation}
                        returnKeyType='next'
                        onChangeText={formik.handleChange('passwordConfirmation')}
                        onBlur={formik.handleBlur('passwordConfirmation')}
                        mode='outlined'
                        label='Confirmar senha'
                        secureTextEntry={secureTextEntryPassword}
                    />
                    <IF condition={!!formik.errors.passwordConfirmation && !!formik.touched.passwordConfirmation}>
                        <HelperText type='error'>{formik.errors.passwordConfirmation}</HelperText>
                    </IF>
                </View>


                <View style={styles.containerInput}>
                    <Button style={styles.button} mode='text' onPress={() => formik.handleSubmit()}>Cadastrar</Button>
                </View>

                <View style={styles.containerInput}>
                    <Button style={styles.button} mode='text' onPress={handleLogin}>Voltar</Button>
                </View>

            </View>
        </>
    )
}