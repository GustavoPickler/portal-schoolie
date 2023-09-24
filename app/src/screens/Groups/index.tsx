import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
} from 'react-native';

import { Header } from 'react-native-elements';
import { useNavigation, NavigationProp } from '@react-navigation/native'

import { styles } from './styles'
import { GroupListItem } from '../../components/GroupListItem'
import IllustrationImg from '../../assets/borderSchoolieIcon.png'
import { AuthStackParamList } from '../../routes/auth.routes'
import IF from '../../components/IFComponent';
import { SchoolieContext } from '../../context/SchoolieContext';

export interface GroupData {
    id: number, 
    name: string, 
    description: string,
    teacherName: string,
}

export default function Groups() {
    const [groups, setGroups] = useState<GroupData[]>([{id: 1, name: 'Biologiaaaaaaaaaaaaaaaaa', description: 'Venha aprender biologiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!', teacherName: 'Gabriel Pickler'}]);
    const { loggedUser } = useContext(SchoolieContext);
    const navigation = useNavigation<NavigationProp<AuthStackParamList, 'Groups'>>();
    function navigateToMural(group: GroupData) {
        const groupId = group.id;
        navigation.navigate('Mural', { groupId });
    }

    return (
        <>
            <Header
                containerStyle={styles.header}
                leftComponent={<Image
                    style={styles.image}
                    source={IllustrationImg}
                />}
                centerComponent={
                <Text style={styles.title}>
                    Meus Grupos
                </Text>
                }
            />

            <IF condition={(!groups || !groups.length) && loggedUser?.userType === 'Student'}>
                <View style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    
                </View>
            </IF>

            <IF condition={!!(groups && groups.length)}>
                <View style={styles.content}>
                    <FlatList
                        data={groups}
                        renderItem={data => <GroupListItem 
                                                description={data.item.description} 
                                                id={data.item.id} 
                                                name={data.item.name}
                                                teacherName={data.item.teacherName}/>}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </IF>
        </>
    )
}