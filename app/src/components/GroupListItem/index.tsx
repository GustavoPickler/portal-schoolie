import React, { useState } from 'react';
import { GroupData } from '../../screens/Groups';
import { TouchableOpacity, View } from 'react-native';
import { Title, Text } from 'react-native-paper';
import { styles } from './styles';
export function GroupListItem({ name, description, teacherName }: GroupData) {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Title style={{ fontWeight: 'bold' }} numberOfLines={2} ellipsizeMode='tail'>{name}</Title>
                <View style={styles.description}>
                    <Text variant='bodyLarge' numberOfLines={3} ellipsizeMode='tail'>{description}</Text>
                </View>
                <View style={styles.teacherContainer}>
                    <Text variant='bodyLarge' style={{ fontWeight: 'bold' }}>Professor:&nbsp;</Text>
                    <Text variant='bodyLarge'>{teacherName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}