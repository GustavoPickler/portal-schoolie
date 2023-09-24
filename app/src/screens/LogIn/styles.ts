import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 0,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.LightOrange
    },
    containerFull: {
        flex: 1
    },
    container: {
        borderBottomEndRadius: 80,
        borderBottomStartRadius: 80,
        backgroundColor: theme.colors.LightOrange,
        height: '40%',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    iconImage: {
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 300,
        width: 450
    },
    fonts: {
        maxWidth: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 25,
        fontFamily: theme.fonts.nunito800,
        fontSize: 48,
        color: theme.colors.Orange,
    }
})

export default styles