import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { HomeComponent } from '../../components/HomeComponent'
import IllustrationImg from '../../assets/borderSchoolieIcon.png'
import LensIcon from '../../../src/assets/lensIcon.png'

export default function Home() {

    const [groups, setGroups] = useState<{ id: number, title: string, name: string }[]>([]);

    const navigation = useNavigation();

    const handleCreateGroup = (newGroup: { id: number, title: string, name: string }) => {
        setGroups([...groups, newGroup]);
    };

    const handleRemoveGroup = (id: number) => {
        const updatedGroups = groups.filter(group => group.id !== id);
        setGroups(updatedGroups);
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
                    Meus Grupos
                </Text>}
            />
            <View style={styles.content}>
                <HomeComponent groups={groups} onRemoveGroup={handleRemoveGroup} onCreateGroup={handleCreateGroup} onAddGroup={handleCreateGroup} />
            </View>
        </>
    )
}