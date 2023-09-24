import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    headline: {
        paddingHorizontal: 10, 
        paddingTop: 20,
        color: '#000',
        fontWeight: '700'
    },
    buttonNext: {
        alignSelf: 'flex-end',
        borderWidth: 2,
        borderColor: theme.colors.Black
    }
})