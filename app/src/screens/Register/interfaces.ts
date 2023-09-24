export interface UserRegisterProps {
    username: string,
    email: string,
    phone: string,
    password: string
}

export interface StudentRegisterProps extends UserRegisterProps {}

export interface TeacherRegisterProps extends UserRegisterProps {
    document: string;
}

export interface ResponsibleRegisterProps extends UserRegisterProps {
    document: string;
}

export interface UserInformation {
    id: number,
    username: string,
    email: string,
    phone: string,
    userType: string
}

export interface StudentRegisterResponse extends UserInformation {}

export interface TeacherRegisterResponse extends UserInformation {}

export interface ResponsibleRegisterResponse extends UserInformation {}