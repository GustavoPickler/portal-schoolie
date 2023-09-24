import { Dimensions, StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const styles = StyleSheet.create({
    containerFull: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        height: Dimensions.get('screen').height,
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