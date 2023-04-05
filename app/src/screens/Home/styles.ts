import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    image: {
        width: 38,
        height: 38,
        marginLeft: 20,
        marginBottom: 10
    },
    content: {
    },
    header: {
        backgroundColor: '#FF6110',
        height: 90
    },
    title: {
        color: theme.colors.Black,
        textAlign: 'center',
        fontSize: 35,
        fontFamily: theme.fonts.ubuntu400,
        lineHeight: 40,
        verticalAlign: 'top'
    },
    lensImage:{
        width: 20
    }
})