import React, { useState } from 'react';
import {
    FlatList,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import { styles } from "./styles";
import { HelperText, DataTable } from 'react-native-paper'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import IF from '../IFComponent'
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SelectInput from 'react-native-input-select';
import Modal from "react-native-modal";
import ActionButton from 'react-native-action-button';
import EditImage from '../../assets/editImage.png'
import ArrowIcon from '../../assets/arrowIcon.png'

interface Props {
    notifications: { id: number, title: string, name: string }[],
    onRemoveNotification: (id: number) => void,
    onAddNotification: (newNotification: { id: number, title: string, name: string }) => void,
    handleMural: () => void,
}

export function MuralComponent({ notifications, onRemoveNotification, onAddNotification, handleMural }: Props) {

    const [showAddNotificationModal, setShowAddNotificationModal] = useState(false);
    const [showSearchNotificationModal, setShowSearchNotificationModal] = useState(false);
    const [newNotificationTitle, setNewNotificationTitle] = useState("");
    const [newNotificationDescription, setNewNotificationDescription] = useState("");
    const [searchedNotification, setSearchedNotification] = useState<{ id: number, title: string, name: string } | null>(null);
    const [notificationType, setNotificationType] = useState("")

    const creationSchema = Yup.object({
        notificationTitle: Yup.string().max(10, 'Insira no máximo 10 caracteres!').required('Insira o título da notificação!'),
        notificationName: Yup.string().required('Insira a descrição da notificação!'),
    })

    const formik = useFormik({
        initialValues: {
            notificationTitle: '',
            notificationName: '',
            notificationSearch: '',
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: creationSchema,
        onSubmit: () => {
            handleAddNotification()
        },
    })

    const handleAddNotification = () => {
        const newNotification = {
            id: Math.floor(Math.random() * 1000) + 1,
            title: formik.values.notificationTitle,
            name: formik.values.notificationName,
        };
        onAddNotification(newNotification);
        setShowAddNotificationModal(false);
        setNewNotificationTitle("");
        setNewNotificationDescription("");
        formik.resetForm();
    };

    const handleSearchNotificationById = () => {
        if (formik.values.notificationSearch) {
            const notificationId = Number(formik.values.notificationSearch);
            const notification = notifications.find((g) => g.id === notificationId);
            if (notification) {
                setSearchedNotification(notification);
                const alreadyInNotification = notifications.some((g) => g.id === notification.id);
                if (!alreadyInNotification) {
                    onAddNotification(notification);
                    setShowSearchNotificationModal(false);
                    setSearchedNotification(null);
                } else {
                    console.log('Notificação encontrada');
                }
            } else {
                console.log('Notificação não encontrada');
            }
        }
    }

    const handleRemoveNotification = (id: number) => {
        onRemoveNotification(id);
    }

    const renderItem = ({ item }: { item: { id: number, title: string, name: string } }) => (
        <TouchableOpacity onPress={handleMural}>
            <View style={styles.tableContainer}>
                <DataTable style={styles.dataTableContainer}>
                    <DataTable.Cell style={styles.groupItem}>
                        <Text style={styles.itemText}> {item.title} </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.teacherItem}>
                        <Text style={styles.itemText}> {item.name} </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.emptyTable}> </DataTable.Cell>
                </DataTable>
                <TouchableOpacity style={styles.editImage} activeOpacity={5} onPress={() => handleRemoveNotification(item.id)}>
                    <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity >
    )

    return (
        <View style={styles.container}>
            {notifications.length === 0 && (
                <View>
                    <View style={styles.subscribeContainer}>
                        <Text style={styles.subscribeText}>
                            Sem notificações por enquanto!
                        </Text>
                        <View>
                            <View style={styles.subscribeContainer2}>
                                <Text style={styles.subscribeText2}>
                                    Adicione novos materiais e/ou conteúdos clicando neste botão
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Image
                        source={ArrowIcon}
                        style={styles.arrowIcon}
                    />
                </View>
            )}
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <Modal isVisible={showAddNotificationModal} animationIn='slideInLeft' animationOut='slideOutRight'>
                <TouchableWithoutFeedback onPress={() => { setShowAddNotificationModal(false); formik.resetForm(); }}>
                    <View>
                        <KeyboardAwareScrollView extraHeight={200} scrollEnabled={false}>
                            <View style={styles.modalContainer}>
                                <View>
                                    <SelectInput
                                        placeholder="Tipo da Notificação"
                                        optionValue={'code'}
                                        optionLabel={'name'}
                                        onValueChange={(notificationType: string) => setNotificationType(notificationType)}
                                        options={[
                                            { name: 'Material', code: 'AL' },
                                            { name: 'Conteúdo', code: 'AX' },
                                            { name: 'Avaliação', code: 'DZ' },
                                            { name: 'Formulário', code: 'AS' },
                                        ]}
                                    />
                                </View>
                                <TextInput
                                    style={styles.modalInput2}
                                    placeholder="Descrição"
                                    placeholderTextColor='#A9A9AC'
                                    value={formik.values.notificationName}
                                    onChangeText={formik.handleChange('notificationName')}
                                    onBlur={formik.handleBlur('notificationName')}
                                />
                                <IF condition={!!formik.errors.notificationName && !!formik.touched.notificationName}>
                                    <HelperText type='error'>{formik.errors.notificationName}</HelperText>
                                </IF>
                                <View style={styles.modalButtonsContainer}>
                                    <TouchableOpacity style={styles.modalButton1} onPress={() => formik.handleSubmit()}>
                                        <Text style={styles.modalButtonText}>Salvar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalButton2} onPress={() => { setShowAddNotificationModal(false); formik.resetForm(); }}>
                                        <Text style={styles.modalButtonText}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal isVisible={showSearchNotificationModal} animationIn='slideInLeft' animationOut='slideOutRight'>
                <TouchableWithoutFeedback onPress={() => { setShowSearchNotificationModal(false); formik.resetForm(); }}>
                    <View>
                        <KeyboardAwareScrollView extraHeight={200} scrollEnabled={false}>
                            <View style={styles.modalSearchContainer}>
                                <Text style={styles.modalTitle}>Procurar </Text>
                                <TextInput
                                    style={styles.modalInput1}
                                    placeholder="Insira o ID"
                                    placeholderTextColor='#A9A9AC'
                                    value={formik.values.notificationSearch}
                                    onChangeText={formik.handleChange('notificationSearch')}
                                    onBlur={formik.handleBlur('notificationSearch')}
                                />
                                <IF condition={!!formik.errors.notificationSearch && !!formik.touched.notificationSearch}>
                                    <HelperText type='error'>{formik.errors.notificationSearch}</HelperText>
                                </IF>
                                <View style={styles.modalButtonsContainer}>
                                    <TouchableOpacity style={styles.modalButton1} onPress={handleSearchNotificationById}>
                                        <Text style={styles.modalButtonText}>Buscar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalButton2} onPress={() => { setShowSearchNotificationModal(false); formik.resetForm(); }}>
                                        <Text style={styles.modalButtonText}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <ActionButton buttonColor="#FF6110" onPress={handleAddNotification} />
        </View>
    );
}