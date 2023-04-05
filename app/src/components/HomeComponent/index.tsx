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
import Modal from "react-native-modal";
import ActionButton from 'react-native-action-button';
import EditImage from '../../assets/editImage.png'
import ArrowIcon from '../../assets/arrowIcon.png'

interface Props {
    groups: { id: number, title: string, name: string }[],
    onRemoveGroup: (id: number) => void,
    onCreateGroup: (newGroup: { id: number, title: string, name: string }) => void,
    onAddGroup: (newGroup: { id: number, title: string, name: string }) => void,
}

export function HomeComponent({ groups, onRemoveGroup, onCreateGroup, onAddGroup }: Props) {

    const [showAddGroupModal, setShowAddGroupModal] = useState(false);
    const [showSearchGroupModal, setShowSearchGroupModal] = useState(false);
    const [newGroupTitle, setNewGroupTitle] = useState("");
    const [newTeacherName, setNewTeacherName] = useState("");
    const [searchedGroup, setSearchedGroup] = useState<{ id: number, title: string, name: string } | null>(null);

    const creationSchema = Yup.object({
        groupTitle: Yup.string().max(10, 'Insira no máximo 10 caracteres').required('Insira o nome do grupo'),
        teacherName: Yup.string().required('Insira o nome do orientador'),
    })

    const formik = useFormik({
        initialValues: {
            groupTitle: '',
            teacherName: '',
            groupSearch: '',
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: creationSchema,
        onSubmit: () => {
            handleCreateGroup()
        },
    })

    const handleAddGroup = () => {
        setShowAddGroupModal(true);
    };

    const handleSearchGroup = () => {
        setShowSearchGroupModal(true);
    }

    const handleCreateGroup = () => {
        const newGroup = {
            id: Math.floor(Math.random() * 1000) + 1,
            title: formik.values.groupTitle,
            name: formik.values.teacherName,
        };
        onCreateGroup(newGroup);
        setShowAddGroupModal(false);
        setNewGroupTitle("");
        setNewTeacherName("");
        formik.resetForm();
    }

    const handleSearchGroupById = () => {
        if (formik.values.groupSearch) {
            const groupId = Number(formik.values.groupSearch);
            const group = groups.find((g) => g.id === groupId);
            if (group) {
                setSearchedGroup(group);
                const alreadyInGroup = groups.some((g) => g.id === group.id);
                if (!alreadyInGroup) {
                    onAddGroup(group);
                    setShowSearchGroupModal(false);
                    setSearchedGroup(null);
                } else {
                    console.log('Você já está neste grupo');
                }
            } else {
                console.log('Grupo não encontrado');
            }
        }
    }

    const handleRemoveGroup = (id: number) => {
        onRemoveGroup(id);
    }

    const renderItem = ({ item }: { item: { id: number, title: string, name: string } }) => (
        <TouchableOpacity onPress={() => { }}>
            <View style={styles.tableContainer}>
                <DataTable style={styles.dataTableContainer}>
                    <DataTable.Cell style={styles.idTitle}>
                        <Text style={styles.titleText}> ID </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.groupTitle}>
                        <Text style={styles.titleText}> Grupo </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.teacherTitle}>
                        <Text style={styles.titleText}> Orientador </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.emptyTable}> </DataTable.Cell>
                </DataTable>
                <DataTable style={styles.dataTableContainer}>
                    <DataTable.Cell style={styles.idItem}>
                        <Text style={styles.itemText}> {item.id} </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.groupItem}>
                        <Text style={styles.itemText}> {item.title} </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.teacherItem}>
                        <Text style={styles.itemText}> {item.name} </Text>
                    </DataTable.Cell>
                    <DataTable.Cell style={styles.emptyTable}> </DataTable.Cell>
                </DataTable>
                <TouchableOpacity style={styles.editImage} activeOpacity={5} onPress={() => handleRemoveGroup(item.id)}>
                    <Ionicons name="trash-outline" size={24} color="black"/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity >
    )

    return (
        <View style={styles.container}>
            {groups.length === 0 && (
                <View>
                    <View style={styles.subscribeContainer}>
                        <Text style={styles.subscribeText}>
                            Você ainda não está em nenhum grupo!
                        </Text>
                        <View>
                            <View style={styles.subscribeContainer2}>
                                <Text style={styles.subscribeText2}>
                                    Clicando neste botão você poderá buscar por um grupo existente ou criar um novo!
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
                data={groups}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            <Modal isVisible={showAddGroupModal} animationIn='slideInLeft' animationOut='slideOutRight'>
                <TouchableWithoutFeedback onPress={() => { setShowAddGroupModal(false); formik.resetForm(); }}>
                    <View>
                        <KeyboardAwareScrollView extraHeight={200} scrollEnabled={false}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalTitle}>Criar Grupo</Text>
                                <TextInput
                                    style={styles.modalInput1}
                                    placeholder="Nome do grupo"
                                    placeholderTextColor='#A9A9AC'
                                    value={formik.values.groupTitle}
                                    onChangeText={formik.handleChange('groupTitle')}
                                    onBlur={formik.handleBlur('groupTitle')}
                                />
                                <IF condition={!!formik.errors.groupTitle && !!formik.touched.groupTitle}>
                                    <HelperText type='error'>{formik.errors.groupTitle}</HelperText>
                                </IF>
                                <TextInput
                                    style={styles.modalInput2}
                                    placeholder="Nome do professor"
                                    placeholderTextColor='#A9A9AC'
                                    value={formik.values.teacherName}
                                    onChangeText={formik.handleChange('teacherName')}
                                    onBlur={formik.handleBlur('teacherName')}
                                />
                                <IF condition={!!formik.errors.teacherName && !!formik.touched.teacherName}>
                                    <HelperText type='error'>{formik.errors.teacherName}</HelperText>
                                </IF>
                                <View style={styles.modalButtonsContainer}>
                                    <TouchableOpacity style={styles.modalButton1} onPress={() => formik.handleSubmit()}>
                                        <Text style={styles.modalButtonText}>Salvar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalButton2} onPress={() => { setShowAddGroupModal(false); formik.resetForm(); }}>
                                        <Text style={styles.modalButtonText}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Modal isVisible={showSearchGroupModal} animationIn='slideInLeft' animationOut='slideOutRight'>
                <TouchableWithoutFeedback onPress={() => { setShowSearchGroupModal(false); formik.resetForm(); }}>
                    <View>
                        <KeyboardAwareScrollView extraHeight={200} scrollEnabled={false}>
                            <View style={styles.modalSearchContainer}>
                                <Text style={styles.modalTitle}>Procurar um grupo</Text>
                                <TextInput
                                    style={styles.modalInput1}
                                    placeholder="Insira o ID"
                                    placeholderTextColor='#A9A9AC'
                                    value={formik.values.groupSearch}
                                    onChangeText={formik.handleChange('groupSearch')}
                                    onBlur={formik.handleBlur('groupSearch')}
                                />
                                <IF condition={!!formik.errors.groupSearch && !!formik.touched.groupSearch}>
                                    <HelperText type='error'>{formik.errors.groupSearch}</HelperText>
                                </IF>
                                <View style={styles.modalButtonsContainer}>
                                    <TouchableOpacity style={styles.modalButton1} onPress={handleSearchGroupById}>
                                        <Text style={styles.modalButtonText}>Buscar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalButton2} onPress={() => { setShowSearchGroupModal(false); formik.resetForm(); }}>
                                        <Text style={styles.modalButtonText}>Voltar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <ActionButton buttonColor="#FF6110">
                <ActionButton.Item
                    buttonColor="#24da1e"
                    title="Criar grupo"
                    onPress={handleAddGroup}
                >
                    <Ionicons name="ios-add" style={styles.addButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                    buttonColor="#c051ff"
                    title="Pesquisar grupo"
                    onPress={handleSearchGroup}
                >
                    <Ionicons name="ios-search" style={styles.searchButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
}