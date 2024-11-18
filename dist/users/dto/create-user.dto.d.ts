import { UserRoleTypes } from '../types/user-roles.types';
export declare class CreateUserDto {
    username: string;
    password: string;
    role: UserRoleTypes;
}
