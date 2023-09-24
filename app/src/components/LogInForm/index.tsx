import React, { useState } from "react";
import { TextInput, Button, HelperText } from 'react-native-paper'
import { View } from 'react-native'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { } from 'react-native'
import { styles } from "./styles";
import IF from '../IFComponent'
import { User } from "../../screens/LogIn";

interface Props {
    handleSubmit: (user: User) => void;
}

export default function LogInForm({ handleSubmit }: Props) {
    const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
    const [isLoading, setLoading] = useState(false);

    const loginSchema = Yup.object({
        email: Yup.string().email('Endereço de email inválido').required('Campo obrigatório'),
        password: Yup.string().required('Campo obrigatório')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            setLoading(true);
            await handleSubmit(values)
            setLoading(false);
        },
    })

    return (
        <>
            <View style={styles.container}>
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
                    <Button 
                        style={styles.button} 
                        mode='contained'
                        onPress={() => formik.handleSubmit()}
                        loading={isLoading}
                        disabled={isLoading}>
                            Entrar
                        </Button>
                </View>
            </View>
        </>
    )
}