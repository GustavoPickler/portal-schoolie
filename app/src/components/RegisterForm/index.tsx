import React, { useState } from "react"
import { Text, View } from 'react-native'

import { useFormik } from 'formik';
import * as Yup from 'yup'
import { TextInput, HelperText, Button } from "react-native-paper";
import { UserRegisterProps } from '../../screens/Register/interfaces'
import { formatCPF } from "../../utils/CPFUtils";
import IF from '../IFComponent'
import { styles } from "./styles"

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRegex = /^'?\p{L}+(?:[' ]\p{L}+)*'?$/u

interface Props {
    handleSubmit: (user: UserRegisterProps) => void;
    userType: string;
}


export default function RegisterForm({ handleSubmit, userType }: Props) {
    const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .matches(nameRegex, 'Não é possível inserir caracteres inválidos')
            .min(3, 'Seu nome deve conter pelo menos 3 letras!')
            .max(30, 'Seu nome deve conter no máximo 30 letras!')
            .required('Você deve informar um nome de usuário!'),
        email: Yup.string()
            .email()
            .matches(emailRegex, 'Você deve informar um email válido')
            .required('Você deve informar seu email!'),
        phone: Yup.string()
            .required("Você deve informar um número de celular!")
            .test('len', 'Informe um número de celular válido!', val => val.length != 15),
        password: Yup.string()
            .required('Você deve informar uma senha!')
            .min(8, 'Sua senha deve conter no minímo 8 letras!'),
        document: hasToValidateDocument() ? Yup.string().required('CPF é obrigatório').min(11, 'CPF inválido') : Yup.string().nullable()
        })

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            phone: '',
            password: '',
            document: '',
            userType
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: SignupSchema,
        onSubmit: async (values) => {
            setLoading(true);
            if (values.document) {
                values.document.replace(/[.-]/g, '');
            }

            values.userType = userType;

            await handleSubmit(values);
            setLoading(false);
        },
    })

    function hasToValidateDocument() : boolean {
        return userType === 'TEACHER' || userType === 'RESPONSIBLE'
    }

    return (
        <>
            <View style={styles.containerInput}>
                <TextInput
                    mode='outlined'
                    returnKeyType='next'
                    label='Nome *'
                    style={styles.input}
                    underlineColor='transparent'
                    value={formik.values.username}
                    onChangeText={formik.handleChange('username')}
                    onBlur={formik.handleBlur('username')}
                />
                <IF condition={!!formik.errors.username && !!formik.touched.username}>
                    <HelperText type='error'>{formik.errors.username}</HelperText>
                </IF>
            </View>

            <View style={styles.containerInput}>
                <TextInput
                    mode='outlined'
                    returnKeyType='next'
                    style={styles.input}
                    label='Email *'
                    underlineColor='transparent'
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                />
                <IF condition={!!formik.errors.email && !!formik.touched.email}>
                    <HelperText type='error'>{formik.errors.email}</HelperText>
                </IF>
            </View>
            
            <IF condition={hasToValidateDocument()}>
                <View style={styles.containerInput}>
                    <TextInput
                        mode='outlined'
                        returnKeyType='next'
                        keyboardType="decimal-pad"
                        style={styles.input}
                        label='CPF *'
                        underlineColor='transparent'
                        maxLength={14}
                        value={formik.values.document}
                        onChangeText={text => formik.setFieldValue('document', formatCPF(text))}
                        onBlur={formik.handleBlur('document')}
                    />
                    <IF condition={!!formik.errors.document && !!formik.touched.document}>
                        <HelperText type='error'>{formik.errors.document} </HelperText>
                    </IF>
                </View>
            </IF>

            <View style={styles.containerInput}>
                <TextInput
                    mode='outlined'
                    style={styles.input}
                    placeholder="Digite o telefone *"
                    keyboardType="phone-pad"
                    underlineColor='transparent'
                    onChangeText={formik.handleChange('phone')}
                    onBlur={formik.handleBlur('phone')}
                    maxLength={15}
                />
                <IF condition={!!formik.errors.phone && !!formik.touched.phone}>
                    <HelperText type='error'>{formik.errors.phone}</HelperText>
                </IF>
            </View>

            <View style={styles.containerInput}>
                <TextInput
                    value={formik.values.password}
                    returnKeyType='next'
                    style={styles.input}
                    underlineColor='transparent'
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
                    label='Senha *'
                    secureTextEntry={secureTextEntryPassword}
                />
                <IF condition={!!formik.errors.password && !!formik.touched.password}>
                    <HelperText type='error'>{formik.errors.password}</HelperText>
                </IF>
            </View>

            <View style={styles.containerInput}>
                <Button 
                    style={styles.button} 
                    mode='outlined' 
                    onPress={() => formik.handleSubmit()}
                    loading={isLoading}
                    disabled={isLoading}>
                        Cadastrar
                    </Button>
            </View>
        </>
    )
}