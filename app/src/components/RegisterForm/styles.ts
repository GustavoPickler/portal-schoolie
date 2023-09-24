import { StyleSheet } from "react-native";
import theme from "../../../theme";

export const styles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'center'
    },
    containerInput: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width:'90%',
        marginTop: 20,
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        borderRadius: 15,
        width:'90%',
    },
    input: {
        backgroundColor: theme.colors.surface
    }
})