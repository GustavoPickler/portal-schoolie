import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        borderRadius: 15, 
        borderWidth: 1, 
        borderColor: theme.colors.Black, 
        height: 160,
        maxHeight: 200,
        margin: 6, 
        padding: 10,
    },
    description: {
        height: '50%',
        backgroundColor: 'red'
    },
    teacherContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
    }
})