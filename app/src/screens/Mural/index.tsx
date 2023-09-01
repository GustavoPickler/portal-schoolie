import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { MuralComponent } from '../../components/MuralComponent'
import IllustrationImg from '../../assets/borderSchoolieIcon.png'

export default function Mural() {

    const [notification, setNotification] = useState<{ id: number, title: string, name: string }[]>([]);

    const navigation = useNavigation();

    function navigateToMural() {
        navigation.navigate('Mural' as never)
    }

    const handleNewNotification = (newNotification: { id: number, title: string, name: string }) => {
        setNotification([...notification, newNotification]);
    };

    const handleRemoveNotification = (id: number) => {
        const updatedNotification = notification.filter(notification => notification.id !== id);
        setNotification(updatedNotification);
    };

    return (
        <>
            <Header
                containerStyle={styles.header}
                leftComponent={<Image
                    style={styles.image}
                    source={IllustrationImg}
                />}
                centerComponent={<Text style={styles.title}>
                    Mural
                </Text>}
            />
            <View style={styles.content}>
                <MuralComponent notifications={notification} onRemoveNotification={handleRemoveNotification} onAddNotification={handleNewNotification} handleMural={navigateToMural} />
            </View>
        </>
    )
}