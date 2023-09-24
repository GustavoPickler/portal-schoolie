import { api } from "../../Axios.config";
import { User } from "../../screens/LogIn";

interface LoginData {
    access_token: string
}

export const login = (user: User) => {
    return api.post<LoginData>('/api/auth', user);
  }