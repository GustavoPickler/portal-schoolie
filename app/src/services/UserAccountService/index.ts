import { api } from "../../Axios.config";
import { 
  ResponsibleRegisterProps, 
  ResponsibleRegisterResponse, 
  StudentRegisterProps, 
  StudentRegisterResponse, 
  TeacherRegisterProps, 
  TeacherRegisterResponse, 
  UserInformation 
} from "../../screens/Register/interfaces";

export const createStudent = (student: StudentRegisterProps) => {
  return api.post<StudentRegisterResponse>('/api/user/student', student);
}

export const createResponsible = (student: ResponsibleRegisterProps) => {
  return api.post<ResponsibleRegisterResponse>('/api/user/responsible', student);
}

export const createTeacher = (student: TeacherRegisterProps) => {
  return api.post<TeacherRegisterResponse>('/api/user/teacher', student);
}

export const findByEmail = (email: string) => {
  return api.get<UserInformation>(`/api/user/userByEmail?email=${email}`);
}