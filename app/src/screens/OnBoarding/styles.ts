import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        top: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 294,
        height: 309,
        marginBottom: -60
    },
    content: {
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.Black,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
        fontFamily: theme.fonts.ubuntu400,
        lineHeight: 40
    },
    subtitle: {
        color: theme.colors.Black,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.arvo400,
        lineHeight: 25
    }
})