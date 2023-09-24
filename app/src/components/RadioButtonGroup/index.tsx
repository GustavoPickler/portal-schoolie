import React from "react";
import { Text, TouchableOpacity, View, ViewStyle, TextStyle } from "react-native";

import { styles } from "./styles"

interface RadioButtonProps {
    text: string,
    key: string | number
}

interface Props {
    items: RadioButtonProps[];
    onPress: (key: string | number) => void;
    textStyles?: TextStyle;
    radioCircleStyles?: ViewStyle;
    radioButtonSelectedStyles?: ViewStyle;
}

export default function RadioButtonGroup(props: Props) {
    const [value, setValue] = React.useState<string | number>('');

    return (
        <>
            {props.items.map(item => {
                return (
                    <TouchableOpacity 
                        key={item.key} 
                        style={styles.container} 
                        onPress={() => {
                            setValue(item.key);
                            props.onPress(item.key)}}>
                        <Text style={props.textStyles ? props.textStyles : styles.radioText}>{item.text}</Text>
                        <View style={{ ...styles.radioCircle, ...props.radioCircleStyles}}>
                            {value === item.key && <View style={{...styles.selectedRb, ...props.radioButtonSelectedStyles}} />}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </>
    );
}