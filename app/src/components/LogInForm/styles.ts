import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({

    container: {
        
    },
    containerInput: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '90%',
        marginTop: 20
    },
    button: {
        marginTop: 10,
        borderRadius:15
    },
    keyboardAvoidView: {
    height: 100,
    justifyContent: 'center',
    flex: 1
    }
})