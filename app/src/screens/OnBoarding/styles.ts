import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const WIDTH_BUTTONS = 150;
const HEIGHT_BUTTONS = 50;

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        height: 150,
        width: 350
    },
    content: {
        backgroundColor: '#0096c7',
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        height: '45%',
        padding: 15
    },
    title: {
        color: theme.colors.White,
        textAlign: 'center',
        fontSize: 40,
        marginVertical: 30,
        fontWeight: 'bold',
        fontFamily: theme.fonts.ubuntu400,
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.White,
        fontSize: 16,
        paddingHorizontal: 15,
        fontWeight: 700,
        fontFamily: theme.fonts.arvo400,
        lineHeight: 25,
        marginBottom: 30,
        textAlign: 'center'
    },
    fonts: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'theme.fonts.ubuntu400',
        fontSize: 45,
        fontWeight: 'bold',
        color: '#0096c7'
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    signUpButton: {
        width: WIDTH_BUTTONS,
        height: HEIGHT_BUTTONS,
        textAlignVertical: 'center',
        backgroundColor: theme.colors.Black,
        justifyContent: 'center',
        borderColor: theme.colors.Black,
        borderWidth: 2,
    },
    signInButton: {
        width: WIDTH_BUTTONS,
        backgroundColor: theme.colors.White,
        borderColor: theme.colors.Black,
        borderWidth: 2,
        color: theme.colors.Black,
        height: HEIGHT_BUTTONS,
        textAlignVertical: 'center',
        justifyContent: 'center',
    }
})