import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({

    addButtonIcon: {
        zIndex: 10,
        fontSize: 20,
    },
    searchButtonIcon: {
        zIndex: 10,
        fontSize: 15,
    },
    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 710,
        marginTop: 10,
    },
    icon: {
        width: 54,
        height: 54,
        borderRadius: 300,
    },
    iconImage: {
        width: 15,
        height: 15
    },
    emptyTable: {
        flex: 0.2
    },
    titleText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#939799',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 18,
        justifyContent: 'center',
    },
    groupTitle: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    teacherTitle: {
        flex: 3,
        justifyContent: 'center',
        textAlign: 'center',
    },
    groupItem: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
    },
    teacherItem: {
        flex: 3,
        justifyContent: 'center',
        textAlign: 'center',
    },
    newGroupText: {
        alignItems: 'center',
        marginTop: 10,
        fontSize: 26,
        position: 'absolute',
        justifyContent: 'flex-end'
    },
    dataTableContainer: {
        flexDirection: 'row',
        textAlign: "center",
        justifyContent: 'center',
        verticalAlign: 'center',
        marginTop: 10,
    },
    tableContainer: {
        marginBottom: 20,
        border: 'solid #000',
        borderWidth: 2,
        borderRadius:10,
        height: 70,
        zIndex: 1111111,
        borderColor: '#FF6110'
    },
    groupContainer: {
        width: 90,
        flexDirection: 'column',
        backgroundColor: '#f44336',
    },
    teacherNameContainer: {
        width: 90
    },
    editImage: {
        position: 'absolute',
        right: 2,
        marginTop: 10
    },
    teacherName: {
        fontSize: 12,
        color: '#BEBEBE',
        textAlign: 'center',
        marginBottom: 10,
        flex: 1
    },
    groupName: {
        fontSize: 12,
        color: '#BEBEBE',
        textAlign: 'center',
        marginBottom: 10,
        flex: 1
    },
    confirmationModalButtonCancel: {
        backgroundColor: '#f44336',
    },
    confirmationModalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    modalInput1: {
        height: 40,
        width: '70%',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8
    },
    modalInput2: {
        height: 40,
        width: '70%',
        borderColor: '#CCCCCC',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginTop: 16,
    },
    modalButton1: {
        display: 'flex',
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#FF6110',
        width: '45%',
    },
    modalButton2: {
        display: 'flex',
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#FF6110',
        width: '45%',
        marginLeft: 'auto'
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        margin: 'auto'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginVertical: '90%',
        paddingVertical: 20,
    },
    modalSearchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginVertical: '90%',
        paddingVertical: 20,
        height: 190
    },
    addGroupButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        height: 60,
        width: 60,
        backgroundColor: '#FF6100',
        textAlign: 'center',
        borderRadius: 50,
    },
    lensContent: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginRight: 100,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        height: 60,
        width: 60,
        backgroundColor: '#FF6100',
        textAlign: 'center',
        borderRadius: 50,
    },
    modalContent: {
        backgroundColor: '#FFFFFF',
        padding: 30,
        borderRadius: 8,
        elevation: 5,
        minWidth: 300,
    },
    modalButtonsContainer: {
        flexDirection: 'row',
        width: '70%',
        alignItems: 'center',
        marginTop: 10
    },
    addGroupText: {
        fontSize: 48,
        color: 'black',
    },
    subscribeContainer: {
        marginTop: 40,

    },
    subscribeContainer2: {
        marginTop: 360
    },
    subscribeText: {
        fontSize: 28,
        fontWeight: 'normal',
        color: '#949494',
        textAlign: 'center'
    },
    subscribeText2: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#949494',
        textAlign: 'center'
    },
    subscribeText3: {
        fontSize: 18,
        fontWeight: 'normal',
        color: '#949494',
    },
    lensIcon: {
        width: 30,
        height: 30,
    },
    arrowIcon: {
        position: 'absolute',
        right: 80,
        top: 480,
        width: 100,
        height: 100,
    },
    removeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        width: 32,
        fontSize: 12
    },
    optionsContainer: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "50%",
        marginHorizontal: 20,
    },
    optionButton: {
        backgroundColor: '#FF6100',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginVertical: 5,
        width: 250
    },
    optionButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16
    },
})