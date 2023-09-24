import { useContext } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { isAxiosError } from 'axios';

import { User } from '../screens/LogIn';
import { login } from '../services/AuthService';
import useSnackbar from './useSnackbar';
import { SchoolieContext } from '../context/SchoolieContext';
import { findByEmail } from '../services/UserAccountService';

export default function useLogin() {
    const { showSnackbar } = useSnackbar();
    const { updateLoggedUser } = useContext(SchoolieContext);

    async function doLogin(user: User) : Promise<boolean> {
        try {
            const { data, status } = await login(user);

            if (status === 200) {
                saveSecurityToken(data.access_token);
            }
        } catch (err) {
            if (isAxiosError(err) && err.response && err.response?.status >= 400 && err.response.status <= 499) {
                showSnackbar({ message: err.response.data.message })
                return false;
            }

            showSnackbar({ message: 'Um erro inesperado aconteceu! Tente novamente, por favor.' })
            return false;
        }

        const { data } = await findByEmail(user.email); //TODO: trocar endpoint por um que busque usuario pelo token
        updateLoggedUser(data);
        return true;
    }

    async function saveSecurityToken(accessToken: string) {
        await AsyncStorage.setItem('@SchoolieApp:token', accessToken);
    }

    return { doLogin }
}