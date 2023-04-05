import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const styles = StyleSheet.create({

    containerFull: {
        justifyContent: 'center',
        flex: 1,
    },
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    iconImage: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 150,
        width: 294
    },
    fonts: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 25,
        fontFamily: theme.fonts.nunito800,
        fontSize: 48,
        color: theme.colors.Orange
    }
})

export default styles