import { UserState } from '../enums/userState.enum';
import { UserType } from '../enums/userType.enum';

export interface User {
    id: string;
    fullName: string;
    email: string;
    phoneNum: string;
    createdAt?: Date;
    type: UserType;
    state: UserState;
    profilePicture?: string;
}