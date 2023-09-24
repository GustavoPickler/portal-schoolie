import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react'

interface LoggedUser {
    id: number,
    username: string,
    email: string,
    phone: string,
    userType: string
}

export interface SchoolieContextData {
    loggedUser: LoggedUser | null,
    setLoggedUser: (user: LoggedUser | null) => void,
    updateLoggedUser: (user: LoggedUser) => void,
    isCredentialsLoading: boolean
}

interface Props {
    children: React.ReactNode
}

export const SchoolieContext = createContext({} as SchoolieContextData);

export const SchoolieProvider = ({ children }: Props) => {
    const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);
    const [isCredentialsLoading, setCredentialsLoading] = useState(true);
    const [token, setToken] = useState<string>('');

    useEffect(() => {
        recoverUserTokenFromStorage();
    }, []);

    useEffect(() => {
        loadCredentials();
    }, [token]);

    async function loadCredentials() {
        const result = await AsyncStorage.getItem('@SchoolieApp:loggedUser');
        if (result) {
         setLoggedUser(JSON.parse(result));
        }
        setCredentialsLoading(false);
    }

    async function updateLoggedUser(newUser: LoggedUser) {
        await AsyncStorage.setItem(
            '@SchoolieApp:loggedUser',
            JSON.stringify(newUser),
         );
   
         setLoggedUser(newUser);
     }

     async function recoverUserTokenFromStorage() {
        const token = await recoverStoredToken();
  
        if (token) {
           setToken(token);
           return;
        }
  
        setCredentialsLoading(false);
     }

     async function recoverStoredToken() {
        return await AsyncStorage.getItem('@SchoolieApp:token');
     }

    return (
        <SchoolieContext.Provider value={{ loggedUser, setLoggedUser, updateLoggedUser, isCredentialsLoading }}>
            {children}
        </SchoolieContext.Provider>
    )
}