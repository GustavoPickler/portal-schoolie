import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { OnBoardButton } from '../../components/OnBoardButton'
import IllustrationImg from '../../assets/schoolieIcon.png'

export default function OnBoarding() {

    const navigation = useNavigation();

    function navigateToLogIn() {
        navigation.navigate('LogIn' as never)
    }

    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Bem vindo a sua sala virtual!
                </Text>

                <Text style={styles.subtitle}>
                    Encontre seus professores, {'\n'}
                    faça suas atividades {'\n'}
                    tire suas dúvidas!
                </Text>
                <OnBoardButton
                    activeOpacity={0.2}
                    handleOnPress={navigateToLogIn}
                />
            </View>
        </View>
    )
}