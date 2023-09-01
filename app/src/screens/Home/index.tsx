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
import { NavigationProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../routes/auth.routes'

export default function Home() {

    const [groups, setGroups] = useState<{ id: string, title: string, name: string }[]>([]);

    const navigation = useNavigation<NavigationProp<AuthStackParamList, 'Home'>>();


    function navigateToMural(group: { id: string; title: string; name: string }) {
        const groupId = group.id;
        navigation.navigate('Mural', { groupId });
    }

    const handleCreateGroup = (newGroup: { id: string, title: string, name: string }) => {
        setGroups([...groups, newGroup]);
    };

    const handleRemoveGroup = (id: string) => {
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
                <HomeComponent groups={groups} onRemoveGroup={handleRemoveGroup} onCreateGroup={handleCreateGroup} onAddGroup={handleCreateGroup} handleMural={navigateToMural} />
            </View>
        </>
    )
}