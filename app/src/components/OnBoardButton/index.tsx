import React from "react";
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import ButtonImg from '../../assets/buttonIcon.png';
import { styles } from "./styles";

interface Props {
    handleOnPress: () => void;
    activeOpacity: number;
}

export function OnBoardButton({ handleOnPress, activeOpacity }: Props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.container}
                onPress={handleOnPress}
                activeOpacity={activeOpacity}
            >

                <View style={styles.iconWrapper}>
                    <Image source={ButtonImg} style={styles.icon} />
                </View>

            </TouchableOpacity >
        </View>
    )
}