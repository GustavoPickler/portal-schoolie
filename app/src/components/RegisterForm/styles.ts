import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({

    container: {

    },
    containerInput: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: width - 130,
        marginTop: 10
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        borderRadius: 15,
        width: 180
    }
})