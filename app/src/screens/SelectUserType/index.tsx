import React from "react"
import { SafeAreaView, TouchableWithoutFeedback, View } from "react-native"
import { IconButton, Text } from 'react-native-paper'

import { Icon } from 'react-native-elements';
import { useFonts } from "expo-font"
import { Roboto_700Bold } from "@expo-google-fonts/roboto"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { styles } from "./styles"
import RadioButtonGroup from "../../components/RadioButtonGroup"
import { theme } from "../../global/styles/theme";
import { AuthStackParamList } from "../../routes/auth.routes";

interface Props {
    navigation: NativeStackNavigationProp<AuthStackParamList, 'SelectUserType'>;
 }

export default function SelectUserType({ navigation } : Props) {

    const [userType, setUserType] = React.useState<string>('');

    const [fontsLoaded] = useFonts({
        Roboto_700Bold
    })

    if (!fontsLoaded) {
        return null;
    }

    const userTypes = [
        {
            key: 'STUDENT',
            text: 'Estudante'
        },
        {
            key: 'TEACHER',
            text: 'Professor'
        },
        {
            key: 'RESPONSIBLE',
            text: 'Responsável'
        }
    ]

    const handleCloseButton = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
            return;
        }
        navigation.navigate('OnBoarding');
    }

    const handleNextRegisterButton = () => {
        navigation.navigate('Register', { userType });
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={handleCloseButton}>
                <Icon name="close-outline" type="ionicon" size={40} style={{ padding: 10, alignSelf: 'flex-start' }}></Icon>
            </TouchableWithoutFeedback>
            <Text variant='headlineLarge' style={styles.headline}> Escolha qual categoria de usuário melhor se encaixa em você: </Text>
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
                <RadioButtonGroup
                    items={userTypes}
                    onPress={(userType) => setUserType(userType as string)}
                    textStyles={{ fontSize: 30, fontWeight: 'bold' }}
                    radioCircleStyles={{ borderColor: '#0096c7' }}
                    radioButtonSelectedStyles={{ backgroundColor: '#0096c7' }}
                />
            </View>
            <View style={{ height: '10%', padding: 10 }}>
                <IconButton
                    icon='arrow-right'
                    mode="outlined"
                    onPress={handleNextRegisterButton}
                    size={25}
                    disabled={!userType}
                    rippleColor={theme.colors.Orange}
                    iconColor={theme.colors.Black}
                    style={styles.buttonNext} />
            </View>
        </SafeAreaView>
    )
}